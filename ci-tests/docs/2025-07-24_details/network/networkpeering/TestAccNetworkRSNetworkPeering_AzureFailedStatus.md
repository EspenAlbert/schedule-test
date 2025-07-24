# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c407690ae45e168bd2bd/limits | qa | flaky_500 | 209.01s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafc006d8d55bb9e6228/limits | qa | flaky_500 | 217.02s
[2025-07-13 00:57](#error-2025-07-13t0057570000) |  | qa |  | 1541.03s
[2025-07-14 00:56](#error-2025-07-14t0056420000) |  | dev |  | 1535.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 8 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 3 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 8 minutes
- 2025-07-01
  - PASS 8 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 8 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6244007Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6252002Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6275621Z    test_name=TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6304910Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6306253Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-06T00:44:46.6307195Z         
2025-07-06T00:44:46.6307899Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6308672Z         
2025-07-06T00:44:46.6309241Z           with mongodbatlas_project.second,
2025-07-06T00:44:46.6310354Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-07-06T00:44:46.6311388Z           36: 		resource "mongodbatlas_project" "second" {
2025-07-06T00:44:46.6311936Z         
2025-07-06T00:44:46.6312759Z         error getting project (6869c407690ae45e168bd2bd): error getting project's
2025-07-06T00:44:46.6313605Z         limits (6869c407690ae45e168bd2bd):
2025-07-06T00:44:46.6314850Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c407690ae45e168bd2bd/limits
2025-07-06T00:44:46.6316089Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6317166Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6317898Z         BadRequestDetail: 
2025-07-06T00:44:46.6341458Z   
2025-07-06T00:44:46.6393609Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (209.10s)
```

- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8459340Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-10T13:19:33.8463284Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-10T13:19:33.8511508Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-10T13:19:33.8512282Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-10T13:19:33.8512810Z         
2025-07-10T13:19:33.8513204Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8513546Z         
2025-07-10T13:19:33.8513870Z           with mongodbatlas_project.second,
2025-07-10T13:19:33.8514490Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-07-10T13:19:33.8515056Z           36: 		resource "mongodbatlas_project" "second" {
2025-07-10T13:19:33.8515366Z         
2025-07-10T13:19:33.8515952Z         error getting project (686fbafc006d8d55bb9e6228): error getting project's
2025-07-10T13:19:33.8516438Z         limits (686fbafc006d8d55bb9e6228):
2025-07-10T13:19:33.8517026Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafc006d8d55bb9e6228/limits
2025-07-10T13:19:33.8517731Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8518420Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8518826Z         BadRequestDetail: 
2025-07-10T13:19:33.8531935Z    test_working_directory=/tmp/plugintest3479687326
2025-07-10T13:19:33.8561630Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (217.16s)
```

- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7910915Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-13T00:57:57.7917475Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-13T00:57:57.7957345Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-13T00:57:57.7958102Z     resource_network_peering_test.go:87: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:57:57.7958633Z         
2025-07-13T00:57:57.7959286Z         Error: error deleting MongoDB Network Peering Connection (6872fe95207f456171041131): context deadline exceeded
2025-07-13T00:57:57.7959794Z         
2025-07-13T00:57:57.7960140Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (1541.27s)
```

- 2025-07-14

### Error 2025-07-14T00:56:42+00:00
```
2025-07-14T00:56:42.4086656Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-14T00:56:42.4090186Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-14T00:56:42.4144896Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-14T00:56:42.4145653Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-14T00:56:42.4146187Z         
2025-07-14T00:56:42.4146715Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4147147Z         
2025-07-14T00:56:42.4147509Z           with mongodbatlas_network_peering.first,
2025-07-14T00:56:42.4148323Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-07-14T00:56:42.4148943Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-07-14T00:56:42.4149274Z         
2025-07-14T00:56:42.4150001Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4150428Z         
2025-07-14T00:56:42.4150782Z           with mongodbatlas_network_peering.second,
2025-07-14T00:56:42.4151454Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-07-14T00:56:42.4152087Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-07-14T00:56:42.4152540Z         
2025-07-14T00:56:42.4157194Z    test_step_number=1 test_name=TestMigNetworkNetworkPeering_basicAWS test_terraform_path=/home/runner/work/_temp/09a620f3-47b8-4e09-ab1e-137e3244237e/terraform test_working_directory=/tmp/plugintest1203250145
2025-07-14T00:56:42.4205943Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-14T00:56:42.4206633Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T00:56:42.4207086Z         
2025-07-14T00:56:42.4207786Z         Error: error deleting MongoDB Network Peering Container (68744fd0d81a2d4bb4ea4396): couldn't find resource (21 retries)
2025-07-14T00:56:42.4208325Z         
2025-07-14T00:56:42.4209229Z         Error: error deleting MongoDB Network Peering Container (68744fcf52cba864e5f10496): couldn't find resource (21 retries)
2025-07-14T00:56:42.4209774Z         
2025-07-14T00:56:42.4210111Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (1535.40s)
```

- 2025-07-15 PASS 8 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 3 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 8 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes