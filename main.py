from aiogram.utils import executor
from create_bot import dp
from aiogram.contrib.fsm_storage.memory import MemoryStorage

async def on_startup(_):
	print('Бот онлайн')

from handers import client

client.register_handlers_client(dp)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True, on_startup=on_startup)
    