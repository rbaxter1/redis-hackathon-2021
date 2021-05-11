import grpc
import grpc_testing
import os
import unittest
from unittest import mock
import network_pb2
from server import Network


class TestNetwork(unittest.TestCase):
    '''
    @classmethod
    def setUpClass(cls):
        cls.env_patcher = mock.patch.dict(os.environ, {
            'REDIS_URL': 'redis-12472.c266.us-east-1-3.ec2.cloud.redislabs.com',
            'REDIS_PORT': '12472',
            'REDIS_PASSWORD': 'M64VxjO0Uyf00zZZOoLSbasl8e84dB7z'})
        cls.env_patcher.start()
        super().setUpClass()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        cls.env_patcher.stop()
    '''
    @mock.patch.dict(os.environ, {'REDIS_URL': 'redis-12472.c266.us-east-1-3.ec2.cloud.redislabs.com',
                                  'REDIS_PORT': '12472',
                                  'REDIS_PASSWORD': 'M64VxjO0Uyf00zZZOoLSbasl8e84dB7z'})
    def setUp(self):
        servicers = {
            network_pb2.DESCRIPTOR.services_by_name['Network']: Network()
        }

        self.test_server = grpc_testing.server_from_dictionary(
            servicers, grpc_testing.strict_real_time())

    def test_SaveAndGetImage(self):
        save_request = network_pb2.SaveImageRequest()
        save_request.image = open("C:/git/redis-hackathon-2021/app/src/gandalf.jpg","rb").read()
        
        SaveImage_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['SaveImage']),
            invocation_metadata={},
            request=save_request, timeout=60)

        save_response, save_metadata, save_code, save_details = SaveImage_method.termination()
        self.assertEqual(save_code, grpc.StatusCode.OK)
        self.assertTrue(save_response.success)

        get_request = network_pb2.GetImageRequest(image_id=save_response.image_id)
        GetImage_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['GetImage']),
            invocation_metadata={},
            request=get_request, timeout=60)

        get_response, get_metadata, get_code, get_details = GetImage_method.termination()
        self.assertEqual(get_code, grpc.StatusCode.OK)
        self.assertTrue(get_response.success)
        self.assertEqual(save_request.image, get_response.image)


    def test_CreateUser(self):
        request = network_pb2.CreateUserRequest()

        CreateUser_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['CreateUser']),
            invocation_metadata={},
            request=request, timeout=60)

        response, metadata, code, details = CreateUser_method.termination()
        self.assertEqual(code, grpc.StatusCode.OK)
if __name__ == '__main__':
    unittest.main()
