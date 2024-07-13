from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.utils.keyboard import InlineKeyboardBuilder
import logging

import asyncio

logging.basicConfig(level=logging.INFO)

bot = Bot(token='1034090260:AAEwBOxbymbeYLLGy-ErM4UQ2WFQY2IufdY')
dp = Dispatcher(bot=bot)

@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    builder = InlineKeyboardBuilder()
    builder.row(types.InlineKeyboardButton(
        text="Web apps", url="https://tolic598.github.io/main.html")
    )
    await message.answer("Hello!",reply_markup=builder.as_markup())

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print('Bot stopped!')