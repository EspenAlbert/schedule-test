# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4077267b5775b682fe7/limits | qa | flaky_500 | 252.00s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafc006d8d55bb9e6229/limits | qa | flaky_500 | 236.06s
[2025-07-13 00:57](#error-2025-07-13t0057570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe90006d8d55bbaa255a/limits | qa | flaky_500 | 249.02s
[2025-07-14 00:56](#error-2025-07-14t0056420000) |  | dev |  | 1533.07s
[2025-07-27 00:46](#error-2025-07-27t0046040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d6ea884d723491e063/limits | qa | flaky_500 | 36.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6247702Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6249960Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6379200Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6380616Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6381499Z         
2025-07-06T00:44:46.6382207Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6382816Z         
2025-07-06T00:44:46.6383408Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6384751Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6385834Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6386410Z         
2025-07-06T00:44:46.6387235Z         error getting project (6869c4077267b5775b682fe7): error getting project's
2025-07-06T00:44:46.6388081Z         limits (6869c4077267b5775b682fe7):
2025-07-06T00:44:46.6389130Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4077267b5775b682fe7/limits
2025-07-06T00:44:46.6390355Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6391484Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6392217Z         BadRequestDetail: 
2025-07-06T00:44:46.6394822Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (252.03s)
```

- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8461820Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-10T13:19:33.8464213Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-10T13:19:33.8553315Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-10T13:19:33.8554008Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:19:33.8554489Z         
2025-07-10T13:19:33.8554883Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8555224Z         
2025-07-10T13:19:33.8555553Z           with mongodbatlas_project.my_project,
2025-07-10T13:19:33.8556194Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-10T13:19:33.8556789Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-10T13:19:33.8557101Z         
2025-07-10T13:19:33.8557568Z         error getting project (686fbafc006d8d55bb9e6229): error getting project's
2025-07-10T13:19:33.8558047Z         limits (686fbafc006d8d55bb9e6229):
2025-07-10T13:19:33.8558637Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafc006d8d55bb9e6229/limits
2025-07-10T13:19:33.8559312Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8559905Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8560318Z         BadRequestDetail: 
2025-07-10T13:19:33.8562144Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (236.62s)
```

- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7914784Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-13T00:57:57.7918285Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-13T00:57:57.7932906Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-13T00:57:57.7933613Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:57:57.7934099Z         
2025-07-13T00:57:57.7934502Z         Error: error when getting project properties after create
2025-07-13T00:57:57.7934846Z         
2025-07-13T00:57:57.7935187Z           with mongodbatlas_project.my_project,
2025-07-13T00:57:57.7936021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-13T00:57:57.7936634Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-13T00:57:57.7936957Z         
2025-07-13T00:57:57.7937423Z         error getting project (6872fe90006d8d55bbaa255a): error getting project's
2025-07-13T00:57:57.7937907Z         limits (6872fe90006d8d55bbaa255a):
2025-07-13T00:57:57.7938496Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe90006d8d55bbaa255a/limits
2025-07-13T00:57:57.7939180Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:57:57.7939787Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:57:57.7940197Z         BadRequestDetail: 
2025-07-13T00:57:57.7941446Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (249.20s)
```

- 2025-07-14

### Error 2025-07-14T00:56:42+00:00
```
2025-07-14T00:56:42.4088832Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-14T00:56:42.4090660Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-14T00:56:42.4126258Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-14T00:56:42.4126899Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-07-14T00:56:42.4127337Z         
2025-07-14T00:56:42.4127899Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4128334Z         
2025-07-14T00:56:42.4128686Z           with mongodbatlas_network_peering.test,
2025-07-14T00:56:42.4129356Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-07-14T00:56:42.4129978Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-07-14T00:56:42.4130309Z         
2025-07-14T00:56:42.4144286Z    test_working_directory=/tmp/plugintest1722520457 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-14T00:56:42.4190945Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-14T00:56:42.4191589Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T00:56:42.4192044Z         
2025-07-14T00:56:42.4192864Z         Error: error deleting MongoDB Network Peering Container (68744fced81a2d4bb4ea424f): couldn't find resource (21 retries)
2025-07-14T00:56:42.4193414Z         
2025-07-14T00:56:42.4193772Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (1533.70s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27

### Error 2025-07-27T00:46:04+00:00
```
2025-07-27T00:46:04.5516528Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-27T00:46:04.5518196Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-27T00:46:04.5532824Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-27T00:46:04.5533457Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-07-27T00:46:04.5533883Z         
2025-07-27T00:46:04.5534277Z         Error: error when getting project properties after create
2025-07-27T00:46:04.5534625Z         
2025-07-27T00:46:04.5534954Z           with mongodbatlas_project.my_project,
2025-07-27T00:46:04.5535591Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-27T00:46:04.5536182Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-27T00:46:04.5536492Z         
2025-07-27T00:46:04.5536945Z         error getting project (688573d6ea884d723491e063): error getting project's
2025-07-27T00:46:04.5537410Z         limits (688573d6ea884d723491e063):
2025-07-27T00:46:04.5537990Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d6ea884d723491e063/limits
2025-07-27T00:46:04.5538663Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:46:04.5539253Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:46:04.5539660Z         BadRequestDetail: 
2025-07-27T00:46:04.5540054Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (36.36s)
```

- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 3 minutes
- 2025-07-31 PASS 3 minutes