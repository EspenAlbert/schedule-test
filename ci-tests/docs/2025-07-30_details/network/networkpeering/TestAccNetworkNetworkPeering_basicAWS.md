# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c407690ae45e168bd2ab/limits | qa | flaky_500 | 200.07s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafcfd583001f9eeb1d3/limits | qa | flaky_500 | 196.03s
[2025-07-14 00:56](#error-2025-07-14t0056420000) |  | dev |  | 1533.01s
[2025-07-20 00:45](#error-2025-07-20t0045370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393c823af9166ef915ec/limits | qa | flaky_500 | 34.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 2 minutes
- 2025-07-05 PASS 2 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6240028Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6251282Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6341988Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6343263Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6344288Z         
2025-07-06T00:44:46.6345054Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6345665Z         
2025-07-06T00:44:46.6346258Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6347424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6348520Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6349091Z         
2025-07-06T00:44:46.6349918Z         error getting project (6869c407690ae45e168bd2ab): error getting project's
2025-07-06T00:44:46.6350758Z         limits (6869c407690ae45e168bd2ab):
2025-07-06T00:44:46.6351893Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c407690ae45e168bd2ab/limits
2025-07-06T00:44:46.6353319Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6354582Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6355320Z         BadRequestDetail: 
2025-07-06T00:44:46.6378356Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6392797Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (200.68s)
```

- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 2 minutes
  - FAIL 3 minutes

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8456708Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8464670Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8479350Z    test_name=TestMigNetworkNetworkPeering_basicAWS test_terraform_path=/home/runner/work/_temp/aba93256-2e7e-4bef-b39b-97be7a95ef4c/terraform test_working_directory=/tmp/plugintest1733601237
2025-07-10T13:19:33.8532310Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8532953Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:19:33.8533423Z         
2025-07-10T13:19:33.8533830Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8534178Z         
2025-07-10T13:19:33.8534506Z           with mongodbatlas_project.my_project,
2025-07-10T13:19:33.8535284Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-10T13:19:33.8535894Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-10T13:19:33.8536224Z         
2025-07-10T13:19:33.8536681Z         error getting project (686fbafcfd583001f9eeb1d3): error getting project's
2025-07-10T13:19:33.8537157Z         limits (686fbafcfd583001f9eeb1d3):
2025-07-10T13:19:33.8537749Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafcfd583001f9eeb1d3/limits
2025-07-10T13:19:33.8538426Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8539019Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8539460Z         BadRequestDetail: 
2025-07-10T13:19:33.8552309Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName test_terraform_path=/home/runner/work/_temp/aba93256-2e7e-4bef-b39b-97be7a95ef4c/terraform test_working_directory=/tmp/plugintest433711574 test_step_number=1
2025-07-10T13:19:33.8561174Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (196.33s)
```

- 2025-07-11 PASS 2 minutes
- 2025-07-12 PASS 2 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T00:56:42+00:00
```
2025-07-14T00:56:42.4084078Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4091088Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4113296Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4113879Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-14T00:56:42.4114314Z         
2025-07-14T00:56:42.4114836Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4115259Z         
2025-07-14T00:56:42.4115607Z           with mongodbatlas_network_peering.test,
2025-07-14T00:56:42.4116274Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-07-14T00:56:42.4116902Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-07-14T00:56:42.4117376Z         
2025-07-14T00:56:42.4180270Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4180870Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T00:56:42.4181316Z         
2025-07-14T00:56:42.4182017Z         Error: error deleting MongoDB Network Peering Container (68744fcdd81a2d4bb4ea41d3): couldn't find resource (21 retries)
2025-07-14T00:56:42.4182755Z         
2025-07-14T00:56:42.4183062Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (1533.14s)
```

- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 2 minutes
- 2025-07-17 PASS 2 minutes
- 2025-07-18 PASS 2 minutes
- 2025-07-19 PASS 2 minutes
- 2025-07-20

### Error 2025-07-20T00:45:37+00:00
```
2025-07-20T00:45:37.2788667Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-20T00:45:37.2795557Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-20T00:45:37.2808418Z    test_name=TestAccNetworkNetworkPeering_basicAWS test_terraform_path=/home/runner/work/_temp/c06d8fab-6861-4701-b2f0-a97fec7d03af/terraform test_working_directory=/tmp/plugintest1724508915
2025-07-20T00:45:37.2809483Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:45:37.2809916Z         
2025-07-20T00:45:37.2810313Z         Error: error when getting project properties after create
2025-07-20T00:45:37.2810662Z         
2025-07-20T00:45:37.2811006Z           with mongodbatlas_project.my_project,
2025-07-20T00:45:37.2811658Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-20T00:45:37.2812260Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-20T00:45:37.2812586Z         
2025-07-20T00:45:37.2813053Z         error getting project (687c393c823af9166ef915ec): error getting project's
2025-07-20T00:45:37.2813524Z         limits (687c393c823af9166ef915ec):
2025-07-20T00:45:37.2814752Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393c823af9166ef915ec/limits
2025-07-20T00:45:37.2815462Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:45:37.2816065Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:45:37.2816481Z         BadRequestDetail: 
2025-07-20T00:45:37.2816824Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (34.69s)
```

- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 2 minutes
- 2025-07-23
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-24 PASS 2 minutes
- 2025-07-25 PASS 2 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 2 minutes
- 2025-07-29 PASS 2 minutes
- 2025-07-30 PASS 2 minutes