from matplotlib.pyplot import text
from keyboards import kb
from multiprocessing import context
from shutil import ignore_patterns
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.dispatcher.filters import BoundFilter
from aiogram import Dispatcher, types
from create_bot import dp, bot
from aiogram.dispatcher.filters import Text
from aiogram.types import CallbackQuery
import random
from aiogram import types
import pymysql
from pymysql.cursors import DictCursor
import pymysql.cursors
import datetime, time
import random 
from config import host, user, password, db_name
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import pymysql
from pymysql.cursors import DictCursor
import pymysql.cursors
import time
import requests

try:
    connection = pymysql.connect(host = host,
                                user = user,
                                password = password,
                                database = db_name,
                                charset='utf8mb4',
                                port=3306,
                                cursorclass=DictCursor)
    print("ок")
except Exception as ex:
    print(ex)


dt = datetime.datetime.today().strftime('%d.%m %H:%M')
end_time = (time.time())

print((f'Бот запущен\nДата запуска: {dt}\nВремя запуска: {round(end_time,1)} секунды\n'))

class FSMclient(StatesGroup):
    obm = State()

'''#''''''''''''''''''''''''''''''''''''''''Запуск бота''''''''''''''''''''''''''''''''''''''''''''#'''
async def start_bot(message: types.Message):
    id = message.from_user.id
    name = message.from_user.first_name
    username = message.from_user.username
    dates = datetime.datetime.today().strftime('%d.%m %H:%M')
    await message.answer(f"привет",reply_markup=kb)

'''#''''''''''''''''''''''''''''''''''''''''регистр''''''''''''''''''''''''''''''''''''''''''''#'''
def register_handlers_client(dp: Dispatcher):
    dp.register_message_handler(start_bot, commands=['start'])