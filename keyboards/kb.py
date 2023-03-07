from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, ReplyKeyboardRemove, InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.types.web_app_info import WebAppInfo
'''#''''''''''''''''''''''''''''''''''''''''Обменик''''''''''''''''''''''''''''''''''''''''''''#'''
b  = InlineKeyboardButton(text="Сайт", web_app=WebAppInfo(url="https://Tolic598.github.io"))
kb = InlineKeyboardMarkup(row_width=1)
kb.row(b)