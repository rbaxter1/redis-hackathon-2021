import redis
import sys
import logging
import grpc
from concurrent import futures
from google.protobuf.json_format import MessageToJson, Parse

if __name__ == '__main__':
    log = logging.getLogger('')
    log.setLevel(logging.DEBUG)
    sh = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter('[%(asctime)s] %(levelname)s [%(filename)s.%(funcName)s:%(lineno)d] %(message)s', datefmt='%a, %d %b %Y %H:%M:%S')
    sh.setFormatter(formatter)
    log.addHandler(sh)
    
    log.info("These aren’t the droids you’re looking for.")
    log.warning("You take the red pill, you stay in Wonderland and I show you how deep the rabbit-hole goes.")
    log.debug("Happy hunger games and may the odds be ever in your favor.")
    log.critical("All we have to decide is what to do with the time that is given us.")

    redis_url = os.environ['REDIS_URL']
    log.info('Using redis url: {0}'.format(redis_url))
