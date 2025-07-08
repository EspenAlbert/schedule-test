# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 4)
Success rate: 50.00%

## Timeline
### 2025-07-01
#### PASS 9 minutes
```
2025-07-01T08:45:58.4607274Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-01T08:45:58.4608418Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-01T08:45:58.4611214Z --- PASS: TestAccNetworkRSPrivateLinkEndpointGCP_basic (567.89s)
```
### 2025-07-02
#### PASS 8 minutes
```
2025-07-02T00:41:12.3606878Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-02T00:41:12.3609594Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-02T00:41:12.3613479Z --- PASS: TestAccNetworkRSPrivateLinkEndpointGCP_basic (535.93s)
```
### 2025-07-03
#### PASS 10 minutes
```
2025-07-03T00:41:46.0967932Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-03T00:41:46.0969523Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-03T00:41:46.0971754Z --- PASS: TestAccNetworkRSPrivateLinkEndpointGCP_basic (625.90s)
```
### 2025-07-04
#### FAIL an hour
GoTestErrorClassification(error_class='timeout',author='human',run_id='2025-07-04T01:28:53.168000+00:00-TestAccNetworkRSPrivateLinkEndpointGCP_basic',confidence=1.0,ts_when='3 days ago')

```
2025-07-04T01:28:53.1683953Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1686167Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1697779Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1698424Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-04T01:28:53.1698869Z         
2025-07-04T01:28:53.1699403Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-04T01:28:53.1699831Z         
2025-07-04T01:28:53.1700193Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-04T01:28:53.1700900Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-04T01:28:53.1701547Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-04T01:28:53.1701886Z         
2025-07-04T01:28:53.1713401Z    test_terraform_path=/home/runner/work/_temp/d2f2798b-dfe7-4ee3-9a40-f89574c58b9a/terraform test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_working_directory=/tmp/plugintest1852655483 test_step_number=1
2025-07-04T01:28:53.1714552Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T01:28:53.1715136Z         
2025-07-04T01:28:53.1715467Z         Error: error when destroying resource
2025-07-04T01:28:53.1715761Z         
2025-07-04T01:28:53.1716109Z         error deleting project (686720428263f52e03e7660e):
2025-07-04T01:28:53.1716695Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686720428263f52e03e7660e
2025-07-04T01:28:53.1717197Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T01:28:53.1717737Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-04T01:28:53.1718384Z         close group while it has active private endpoint services; please terminate
2025-07-04T01:28:53.1718969Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-04T01:28:53.1719374Z         BadRequestDetail: 
2025-07-04T01:28:53.1719737Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3603.45s)
```
### 2025-07-05
#### FAIL an hour
```
2025-07-05T01:27:57.7335170Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7336513Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7349071Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7351423Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-05T01:27:57.7352129Z         
2025-07-05T01:27:57.7353000Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-05T01:27:57.7353725Z         
2025-07-05T01:27:57.7354589Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-05T01:27:57.7355405Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-05T01:27:57.7356056Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-05T01:27:57.7356402Z         
2025-07-05T01:27:57.7367829Z    test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_terraform_path=/home/runner/work/_temp/3ea4ae6f-4ac5-4615-948f-734567411134/terraform test_working_directory=/tmp/plugintest3941555634
2025-07-05T01:27:57.7369120Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T01:27:57.7369719Z         
2025-07-05T01:27:57.7370034Z         Error: error when destroying resource
2025-07-05T01:27:57.7370328Z         
2025-07-05T01:27:57.7370668Z         error deleting project (6868718a37c6036ffcf4426f):
2025-07-05T01:27:57.7371254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868718a37c6036ffcf4426f
2025-07-05T01:27:57.7371758Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T01:27:57.7372291Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-05T01:27:57.7372925Z         close group while it has active private endpoint services; please terminate
2025-07-05T01:27:57.7373503Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-05T01:27:57.7373905Z         BadRequestDetail: 
2025-07-05T01:27:57.7374270Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3603.51s)
```
### 2025-07-06
#### FAIL 7 minutes
```
2025-07-06T00:44:46.6459543Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6461522Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6474899Z   
2025-07-06T00:44:46.6497569Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6498273Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6498780Z         
2025-07-06T00:44:46.6499181Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6499528Z         
2025-07-06T00:44:46.6499843Z           with mongodbatlas_project.test,
2025-07-06T00:44:46.6500460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:44:46.6501017Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:44:46.6501346Z         
2025-07-06T00:44:46.6501823Z         error getting project (6869c404690ae45e168bcfd2): error getting project's
2025-07-06T00:44:46.6502291Z         limits (6869c404690ae45e168bcfd2):
2025-07-06T00:44:46.6502877Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c404690ae45e168bcfd2/limits
2025-07-06T00:44:46.6503570Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6504317Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6504733Z         BadRequestDetail: 
2025-07-06T00:44:46.6505103Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (451.84s)
```
### 2025-07-07
#### FAIL an hour
```
2025-07-07T01:31:31.6590550Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6591852Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6604938Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6605669Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-07T01:31:31.6606114Z         
2025-07-07T01:31:31.6606645Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-07T01:31:31.6607075Z         
2025-07-07T01:31:31.6607616Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-07T01:31:31.6608297Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-07T01:31:31.6608937Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-07T01:31:31.6609269Z         
2025-07-07T01:31:31.6620553Z    test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_terraform_path=/home/runner/work/_temp/9b4becdd-dbb0-4240-9c92-21d762c56c01/terraform
2025-07-07T01:31:31.6621477Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T01:31:31.6622026Z         
2025-07-07T01:31:31.6622444Z         Error: error when destroying resource
2025-07-07T01:31:31.6622735Z         
2025-07-07T01:31:31.6623081Z         error deleting project (686b155f0aabd25fc85da5a0):
2025-07-07T01:31:31.6623669Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b155f0aabd25fc85da5a0
2025-07-07T01:31:31.6624173Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T01:31:31.6624716Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-07T01:31:31.6625374Z         close group while it has active private endpoint services; please terminate
2025-07-07T01:31:31.6625948Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-07T01:31:31.6626348Z         BadRequestDetail: 
2025-07-07T01:31:31.6626713Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3605.00s)
```
### 2025-07-08
#### PASS 8 minutes
```
2025-07-08T00:41:50.6698040Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-08T00:41:50.6700010Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-08T00:41:50.6701835Z --- PASS: TestAccNetworkRSPrivateLinkEndpointGCP_basic (530.39s)
```