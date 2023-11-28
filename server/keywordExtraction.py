# Kor!
from kor.extraction import create_extraction_chain
from kor.nodes import Object, Text, Number

# LangChain Models
from langchain.chat_models import ChatOpenAI
from langchain.llms import OpenAI

# Standard Helpers
import pandas as pd
import requests
import time
import json
from datetime import datetime

# Text Helpers
from bs4 import BeautifulSoup
from markdownify import markdownify as md

# For token counting
from langchain.callbacks import get_openai_callback

def printOutput(output):
    print(json.dumps(output,sort_keys=True, indent=3))

# It's better to do this an environment variable but putting it in plain text for clarity
openai_api_key = "OPENAI_API_KEY"

llm = ChatOpenAI(
#     model_name="gpt-3.5-turbo", # Cheaper but less reliable
    model_name="gpt-3.5-turbo",
    temperature=0,
    max_tokens=2000,
    openai_api_key=openai_api_key
)

schema = Object(
    # This what will appear in your output. It's what the fields below will be nested under.
    # It should be the parent of the fields below. Usually it's singular (not plural)
    id="freelance work",

    # Natural language description about your object
    description="Information about Freelance work between 2 parties",

    # Fields you'd like to capture from a piece of text about your object.
    attributes=[
        Text(
            id="compensation",
            description="The compensation promised for the freelance work.",
        ),
         Text(
            id="duration",
            description="The expected duration of the freelance work.",
        ),
         Text(
            id="client",
            description="Name of the individual or business entity that seeks the services of a freelancer",
         ),
         Text(
            id="freelancer",
            description="Name of the individual or business entity that works for the client in exchange of a set compensation"
         )
    ],

    # Examples help go a long way with telling the LLM what you need
    examples=[
        ("Jordan: Hey Taylor! Your social media expertise is just what I need. Can you manage our profiles? Thinking a 2-month gig. What's the rate? Taylor: Hi Jordan! Absolutely, I'm up for it! How about $800 for the 2 months? Jordan: Sounds good! Thrilled to have you onboard. Let's boost those socials together! ", [{"client": "Jordan"}, {"freelancer": "Taylor"}, {"duration": "2 months"}, {"compensation": "$800"}])
    ]
)

chain = create_extraction_chain(llm, schema, encoder_or_encoder_class='json')

text = """Hi Olivia! Got a website project in mind. Can you take it on? Hoping to launch in a month. What's the ballpark cost? Hi Chris! I'm in! How about $1000 for the website? A month works for me. Excited to get started! Fantastic! Can't wait to see your skills in action. Let's build something awesome!
"""
# output = chain.predict_and_parse(text=(text))["data"]  ---> DEPRECATED
# printOutput(output)  ---> DEPRECATED

chain.run(text)["data"]

def ner_run(text):
  return chain.run(text)["data"]