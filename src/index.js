/**
 * @module lazy-logger
 */
'use strict'
//winston 
const winston = require('winston');

/**
 * Represents a Logger instance
 * @constructor 
 * @param {string} loggerlevel - Desired Logger level
 * @param {string} path - Path to store Log files generated
 * @param {string} dateformat - String format for log file names
 * @param {boolean} enableFileLogs - Enables or disables file logs
 */
function Logger(loggerlevel,enableFileLogs,path,dateformat){
    if(enableFileLogs==true){
        //define daily rotate files for winston
        winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
        //create a new transport
        var transport = new winston.transports.DailyRotateFile({
            filename: path,
            datePattern: dateformat,
            prepend: false,
            level: loggerlevel?loggerlevel:'silly'
        });
        this.logger= new (winston.Logger)({
        transports: [
            // colorize the output to the console
            new (winston.transports.Console)({
                timestamp: (new Date()).toLocaleTimeString(),
                colorize: true,
            }),transport
        ]
    });
    }else if(!enableFileLogs||enableFileLogs===false){
        //console.log('Daily file logging disabled');
        this.logger= new (winston.Logger)({
        transports: [
            // colorize the output to the console
            new (winston.transports.Console)({
                timestamp: (new Date()).toLocaleTimeString(),
                colorize: true,
            })
        ]
    });
    }
    //define the winston logger 
    

    //set the winston logger's level
    this.logger.level = loggerlevel?loggerlevel:'silly';
}
/**@memberof Logger */
Logger.prototype.silly=function(){
    this.logger.silly.apply(null,arguments);
}
/**@memberof Logger */
Logger.prototype.debug=function(){
    this.logger.debug.apply(null,arguments);
}
/**@memberof Logger */
Logger.prototype.verbose=function(){
    this.logger.verbose.apply(null,arguments);
}
/**@memberof Logger */
Logger.prototype.info=function(){
    this.logger.info.apply(null,arguments);
}
/**@memberof Logger */
Logger.prototype.warn=function(){
    this.logger.warn.apply(null,arguments);
}
/**@memberof Logger */
Logger.prototype.error=function(){
    this.logger.error.apply(null,arguments);
}

module.exports=Logger;