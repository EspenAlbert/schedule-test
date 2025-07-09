# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 107) FAIL(x 6)
Success rate: 94.69%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 1.07s
2025-06-05 00:54 |  | dev |  | 2.10s
2025-07-04 01:28 |  | dev | timeout | 3603.05s
2025-07-05 01:27 |  | dev |  | 3603.05s
2025-07-06 00:44 |  | qa |  | 451.08s
2025-07-07 01:31 |  | dev |  | 3605.00s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 7 minutes
### 2025-04-12
#### PASS 9 minutes
### 2025-04-13
#### PASS 7 minutes
### 2025-04-14
#### PASS 7 minutes
### 2025-04-15
#### PASS 9 minutes
### 2025-04-16
#### PASS 8 minutes
#### PASS 13 minutes
### 2025-04-17
#### PASS 8 minutes
### 2025-04-18
#### PASS 8 minutes
### 2025-04-19
#### PASS 8 minutes
### 2025-04-20
#### PASS 8 minutes
### 2025-04-21
#### PASS 7 minutes
### 2025-04-22
#### PASS 7 minutes
### 2025-04-23
#### PASS 9 minutes
### 2025-04-24
#### PASS 8 minutes
### 2025-04-25
#### PASS 9 minutes
### 2025-04-26
#### PASS 11 minutes
### 2025-04-27
#### PASS 8 minutes
### 2025-04-28
#### PASS 8 minutes
### 2025-04-29
#### PASS 8 minutes
### 2025-04-30
#### PASS 11 minutes
#### PASS 8 minutes
### 2025-05-01
#### PASS 10 minutes
#### PASS 8 minutes
#### PASS 9 minutes
#### PASS 7 minutes
#### PASS 8 minutes
#### PASS 8 minutes
#### PASS 8 minutes
### 2025-05-02
#### PASS 10 minutes
### 2025-05-03
#### PASS 9 minutes
### 2025-05-04
#### PASS 7 minutes
### 2025-05-05
#### PASS 7 minutes
### 2025-05-06
#### PASS 9 minutes
### 2025-05-07
#### PASS 8 minutes
### 2025-05-08
#### PASS 9 minutes
### 2025-05-09
#### PASS 9 minutes
### 2025-05-10
#### PASS 9 minutes
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:57.8846112Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-05-11T00:29:57.8847800Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-05-11T00:29:57.8895228Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-05-11T00:29:57.8895910Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8896402Z         
2025-05-11T00:29:57.8896863Z         Error: error creating project: test-acc-tf-p-3243062444025577960
2025-05-11T00:29:57.8897263Z         
2025-05-11T00:29:57.8897614Z           with mongodbatlas_project.test,
2025-05-11T00:29:57.8898249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:57.8899019Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:57.8899384Z         
2025-05-11T00:29:57.8899898Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8900340Z         type
2025-05-11T00:29:57.8909994Z   
2025-05-11T00:29:57.8915497Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (1.68s)
```
### 2025-05-12
#### PASS 8 minutes
### 2025-05-13
#### PASS 8 minutes
#### PASS 8 minutes
### 2025-05-14
#### PASS 9 minutes
### 2025-05-15
#### PASS 8 minutes
### 2025-05-16
#### PASS 7 minutes
### 2025-05-17
#### PASS 8 minutes
### 2025-05-18
#### PASS 7 minutes
### 2025-05-19
#### PASS 7 minutes
### 2025-05-20
#### PASS 7 minutes
### 2025-05-21
#### PASS 7 minutes
### 2025-05-22
#### PASS 10 minutes
### 2025-05-23
#### PASS 7 minutes
### 2025-05-24
#### PASS 7 minutes
### 2025-05-25
#### PASS 7 minutes
### 2025-05-26
#### PASS 7 minutes
### 2025-05-27
#### PASS 7 minutes
### 2025-05-28
#### PASS 34 minutes
#### PASS 9 minutes
### 2025-05-29
#### PASS 9 minutes
### 2025-05-30
#### PASS 32 minutes
### 2025-05-31
#### PASS 7 minutes
### 2025-06-01
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 7 minutes
### 2025-06-02
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 7 minutes
### 2025-06-03
#### PASS 8 minutes
### 2025-06-04
#### PASS 11 minutes
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:54:09.2609245Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-06-05T00:54:09.2610830Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-06-05T00:54:09.2640056Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-06-05T00:54:09.2640679Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2641132Z         
2025-06-05T00:54:09.2641570Z         Error: error creating project: test-acc-tf-p-2627254693720247854
2025-06-05T00:54:09.2641947Z         
2025-06-05T00:54:09.2642270Z           with mongodbatlas_project.test,
2025-06-05T00:54:09.2642889Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:54:09.2643462Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:54:09.2643785Z         
2025-06-05T00:54:09.2644268Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2644921Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2645930Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2646418Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (2.95s)
```
### 2025-06-06
#### PASS 7 minutes
### 2025-06-07
#### PASS 7 minutes
### 2025-06-08
#### PASS 8 minutes
### 2025-06-09
#### PASS 8 minutes
### 2025-06-10
#### PASS 21 minutes
### 2025-06-11
#### PASS 7 minutes
#### PASS 8 minutes
### 2025-06-12
#### PASS 8 minutes
### 2025-06-13
#### PASS 9 minutes
### 2025-06-14
#### PASS 18 minutes
### 2025-06-15
#### PASS 9 minutes
### 2025-06-16
#### PASS 10 minutes
### 2025-06-17
#### PASS 10 minutes
### 2025-06-18
#### PASS 9 minutes
### 2025-06-19
#### PASS 14 minutes
### 2025-06-20
#### PASS 8 minutes
### 2025-06-21
#### PASS 9 minutes
### 2025-06-22
#### PASS 8 minutes
### 2025-06-23
#### PASS 7 minutes
### 2025-06-24
#### PASS 9 minutes
### 2025-06-25
#### PASS 7 minutes
### 2025-06-26
#### PASS 8 minutes
### 2025-06-27
#### PASS 8 minutes
### 2025-06-28
#### PASS 8 minutes
### 2025-06-29
#### PASS 8 minutes
### 2025-06-30
#### PASS 9 minutes
### 2025-07-01
#### PASS 9 minutes
#### PASS 9 minutes
#### PASS 9 minutes
#### PASS 10 minutes
#### PASS 9 minutes
#### PASS 9 minutes
### 2025-07-02
#### PASS 8 minutes
### 2025-07-03
#### PASS 10 minutes
### 2025-07-04
#### FAIL an hour
GoTestErrorClassification(error_class='timeout',author='human',run_id='2025-07-04T01:28:53.168000+00:00-TestAccNetworkRSPrivateLinkEndpointGCP_basic',confidence=1.0,ts_when='4 days ago')

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
### 2025-07-09
#### PASS 8 minutes