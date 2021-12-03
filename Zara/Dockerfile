FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ajmal342/bot-setting /root/WhatsAsenaDuplicated

WORKDIR /root/WhatsAsenaDuplicated/

RUN git clone https://github.com/Ajmal342/media

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
