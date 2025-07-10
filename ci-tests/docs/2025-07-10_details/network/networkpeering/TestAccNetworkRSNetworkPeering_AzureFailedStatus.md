# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 1.06s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.01s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c407690ae45e168bd2bd/limits | qa | flaky_500 | 209.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 3 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 3 minutes
- 2025-04-16
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-04-17 PASS 8 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 3 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 3 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 3 minutes
- 2025-04-25 PASS 3 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS 8 minutes
- 2025-04-29 PASS 3 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS 8 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 8 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-02 PASS 3 minutes
- 2025-05-03 PASS 3 minutes
- 2025-05-04 PASS 8 minutes
- 2025-05-05 PASS 3 minutes
- 2025-05-06 PASS 8 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 9 minutes
- 2025-05-09 PASS 3 minutes
- 2025-05-10 PASS 3 minutes
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8728422Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-05-11T00:29:57.8732193Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-05-11T00:29:57.8765857Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-05-11T00:29:57.8766631Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:29:57.8767191Z         
2025-05-11T00:29:57.8767639Z         Error: error creating project: test-acc-tf-p-3046110278412168826
2025-05-11T00:29:57.8768033Z         
2025-05-11T00:29:57.8768378Z           with mongodbatlas_project.first,
2025-05-11T00:29:57.8769257Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-05-11T00:29:57.8769861Z           13: 		resource "mongodbatlas_project" "first" {
2025-05-11T00:29:57.8770343Z         
2025-05-11T00:29:57.8770855Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8771293Z         type
2025-05-11T00:29:57.8771541Z         
2025-05-11T00:29:57.8771987Z         Error: error creating project: test-acc-tf-p-6495706310887976639
2025-05-11T00:29:57.8772383Z         
2025-05-11T00:29:57.8772730Z           with mongodbatlas_project.second,
2025-05-11T00:29:57.8773372Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-05-11T00:29:57.8773973Z           36: 		resource "mongodbatlas_project" "second" {
2025-05-11T00:29:57.8774308Z         
2025-05-11T00:29:57.8774801Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8775524Z         type
2025-05-11T00:29:57.8785157Z   
2025-05-11T00:29:57.8790717Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (1.56s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-14 PASS 4 minutes
- 2025-05-15 PASS 3 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 8 minutes
- 2025-05-18 PASS 8 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 3 minutes
- 2025-05-21 PASS 3 minutes
- 2025-05-22 PASS 8 minutes
- 2025-05-23 PASS 8 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 8 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 3 minutes
- 2025-06-01
  - PASS 8 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-06-03 PASS 8 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2435158Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-06-05T00:54:09.2439145Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-06-05T00:54:09.2465750Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-06-05T00:54:09.2466652Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:54:09.2467203Z         
2025-06-05T00:54:09.2467650Z         Error: error creating project: test-acc-tf-p-8751585477899757605
2025-06-05T00:54:09.2468030Z         
2025-06-05T00:54:09.2468362Z           with mongodbatlas_project.first,
2025-06-05T00:54:09.2468997Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-06-05T00:54:09.2469573Z           13: 		resource "mongodbatlas_project" "first" {
2025-06-05T00:54:09.2469894Z         
2025-06-05T00:54:09.2470400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2471054Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2471648Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2472147Z         
2025-06-05T00:54:09.2472580Z         Error: error creating project: test-acc-tf-p-857165236030887346
2025-06-05T00:54:09.2472946Z         
2025-06-05T00:54:09.2473275Z           with mongodbatlas_project.second,
2025-06-05T00:54:09.2473910Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-06-05T00:54:09.2474499Z           36: 		resource "mongodbatlas_project" "second" {
2025-06-05T00:54:09.2474818Z         
2025-06-05T00:54:09.2475303Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2476149Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2476741Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2483010Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName test_terraform_path=/home/runner/work/_temp/42386c02-8164-4f5b-ada4-e3e5d7e6fb7b/terraform test_working_directory=/tmp/plugintest2309431398
2025-06-05T00:54:09.2491597Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (3.09s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 3 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 8 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 3 minutes
  - PASS 8 minutes
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 3 minutes
- 2025-06-14 PASS 4 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 8 minutes
- 2025-06-17 PASS 8 minutes
- 2025-06-18 PASS 3 minutes
- 2025-06-19 PASS 3 minutes
- 2025-06-20 PASS 3 minutes
- 2025-06-21 PASS 8 minutes
- 2025-06-22 PASS 3 minutes
- 2025-06-23 PASS 8 minutes
- 2025-06-24 PASS 8 minutes
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
- 2025-07-10 PASS 3 minutes