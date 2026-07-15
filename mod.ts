/// <reference types="./index.d.ts" />
import * as pkg from './index.js'

export const {
  ModbusRTU,
  getPorts,
  TestPort,
  RTUBufferedPort,
  TcpPort,
  TcpRTUBufferedPort,
  TelnetPort,
  C701Port,
  ServerTCP,
  ServerSerial,
} = pkg;
