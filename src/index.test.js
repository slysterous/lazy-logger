var expect=require('chai').expect;
var lazyLogger=require('./index');
var logger;
describe('lazyLogger',function(){
    it('lazy-logger is exported correcly',function(){
        expect(lazyLogger!=undefined).to.be.true;
    })
    describe('lazylogger',function(){
        it('Work as a console logger, without file logs',function(){
            logger=new lazyLogger('info',false);
            expect(logger!=undefined).to.be.true;
        })
    })
    describe('silly',function(){
        it('prototype.silly should be a function',function(){
            logger=new lazyLogger('silly',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.silly && getType.toString.call(logger.silly) === '[object Function]').to.be.true;
        })
        
    })
    describe('debug',function(){
        it('prototype.debug should be a function',function(){
            logger=new lazyLogger('debug',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.debug && getType.toString.call(logger.debug) === '[object Function]').to.be.true;
        })
        
    })
    describe('verbose',function(){
        it('prototype.verbose should be a function',function(){
            logger=new lazyLogger('verbose',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.verbose && getType.toString.call(logger.verbose) === '[object Function]').to.be.true;
        })
        
    })
    describe('info',function(){
        it('prototype.info should be a function',function(){
            logger=new lazyLogger('info',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.info && getType.toString.call(logger.info) === '[object Function]').to.be.true;
        })
        
    })
    describe('warn',function(){
        it('prototype.warn should be a function',function(){
            logger=new lazyLogger('warn',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.warn && getType.toString.call(logger.warn) === '[object Function]').to.be.true;
        }) 
        
    })
    describe('error',function(){
        it('prototype.error should be a function',function(){
            logger=new lazyLogger('error',true,'./log-','yyyy-MM-dd');
            var getType={};
            expect(logger.error && getType.toString.call(logger.error) === '[object Function]').to.be.true;
        })
        
    })
})
