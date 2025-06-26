# network/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 4 minutes
```
2025-06-20T00:41:01.7736313Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-20T00:41:01.7742930Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-20T00:41:01.7745559Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (253.91s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:41:03.3988153Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-21T00:41:03.3991494Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-21T00:41:03.3992863Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (216.64s)
```
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:44:14.8955474Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8961111Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8978954Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8979604Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:14.8980071Z         
2025-06-22T00:44:14.8980475Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8980830Z         
2025-06-22T00:44:14.8981146Z           with mongodbatlas_project.test,
2025-06-22T00:44:14.8981774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:14.8998098Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:14.8998562Z         
2025-06-22T00:44:14.8999053Z         error getting project (68574eeeaf7a0954e84ad968): error getting project's
2025-06-22T00:44:14.8999760Z         limits (68574eeeaf7a0954e84ad968):
2025-06-22T00:44:14.9000486Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeeaf7a0954e84ad968/limits
2025-06-22T00:44:14.9001195Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.9001800Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.9002230Z         BadRequestDetail: 
2025-06-22T00:44:14.9002622Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (33.20s)
```
### 2025-06-23
#### PASS 3 minutes
```
2025-06-23T00:43:34.5917785Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-23T00:43:34.5922101Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-23T00:43:34.5923167Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (205.72s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:41:41.0071718Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-24T00:41:41.0078506Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-24T00:41:41.0080206Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (221.51s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:42:01.3184924Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-25T00:42:01.3188747Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-25T00:42:01.3189704Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (210.22s)
```
### 2025-06-26
#### PASS 4 minutes
```
2025-06-26T00:41:55.7548966Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-26T00:41:55.7555201Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-26T00:41:55.7558082Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAWS_basic (251.71s)
```