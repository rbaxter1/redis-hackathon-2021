import grpc
import grpc_testing
import unittest
import network_pb2
from server import Network

class TestNetwork(unittest.TestCase):
    def setUp(self):
        servicers = {
            network_pb2.DESCRIPTOR.services_by_name['Network']: Network()
        }

        self.test_server = grpc_testing.server_from_dictionary(
            servicers, grpc_testing.strict_real_time())

    def test_SaveImage(self):
        request = network_pb2.SaveImageRequest()

        SaveImage_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['SaveImage']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = SaveImage_method.termination()
        self.assertEqual(code, grpc.StatusCode.OK)

    def test_GetImage(self):
        request = network_pb2.GetImageRequest()

        GetImage_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['GetImage']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = GetImage_method.termination()
        self.assertEqual(code, grpc.StatusCode.OK)

    def test_CreateUser(self):
        request = network_pb2.CreateUserRequest()

        CreateUser_method = self.test_server.invoke_unary_unary(
            method_descriptor=(network_pb2.DESCRIPTOR
                .services_by_name['Network']
                .methods_by_name['CreateUser']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = CreateUser_method.termination()
        self.assertEqual(code, grpc.StatusCode.OK)
if __name__ == '__main__':
    unittest.main()
