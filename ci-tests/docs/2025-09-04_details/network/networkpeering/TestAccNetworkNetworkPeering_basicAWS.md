# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:43](#error-2025-08-17t0043360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cfaafa9a76ca8bae3f/limits | qa | flaky_500 | 207.03s
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81f5b/limits | qa | flaky_500 | 198.08s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 minutes
- 2025-08-07 PASS 6 minutes
- 2025-08-08 PASS 2 minutes
- 2025-08-09 PASS 2 minutes
- 2025-08-10 PASS 2 minutes
- 2025-08-11 PASS 2 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 2 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 2 minutes
- 2025-08-17

### Error 2025-08-17T00:43:36+00:00
```
2025-08-17T00:43:36.9815471Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9829164Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9855153Z   
2025-08-17T00:43:36.9898504Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9899551Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:43:36.9900684Z         
2025-08-17T00:43:36.9901458Z         Error: error when getting project properties after create
2025-08-17T00:43:36.9902136Z         
2025-08-17T00:43:36.9902727Z           with mongodbatlas_project.my_project,
2025-08-17T00:43:36.9903417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-17T00:43:36.9904043Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-17T00:43:36.9904383Z         
2025-08-17T00:43:36.9904867Z         error getting project (68a122cfaafa9a76ca8bae3f): error getting project's
2025-08-17T00:43:36.9905366Z         limits (68a122cfaafa9a76ca8bae3f):
2025-08-17T00:43:36.9906629Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cfaafa9a76ca8bae3f/limits
2025-08-17T00:43:36.9908145Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:43:36.9908778Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:43:36.9909218Z         BadRequestDetail: 
2025-08-17T00:43:36.9910014Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (207.28s)
```

- 2025-08-18 PASS 2 minutes
- 2025-08-19 PASS 2 minutes
- 2025-08-20
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-08-21 PASS 2 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 2 minutes
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7006933Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7019180Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7043274Z   
2025-08-24T00:42:57.7110594Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7111909Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:57.7112979Z         
2025-08-24T00:42:57.7113712Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7114326Z         
2025-08-24T00:42:57.7114921Z           with mongodbatlas_project.my_project,
2025-08-24T00:42:57.7116114Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-24T00:42:57.7117222Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-24T00:42:57.7117792Z         
2025-08-24T00:42:57.7118651Z         error getting project (68aa5d2c9bbb8c4ee1f81f5b): error getting project's
2025-08-24T00:42:57.7119522Z         limits (68aa5d2c9bbb8c4ee1f81f5b):
2025-08-24T00:42:57.7120621Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81f5b/limits
2025-08-24T00:42:57.7122067Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7123322Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7124073Z         BadRequestDetail: 
2025-08-24T00:42:57.7147206Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-24T00:42:57.7161876Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (198.81s)
```

- 2025-08-25 PASS 2 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 2 minutes
- 2025-08-28 PASS 2 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 2 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5574974Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5635347Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5681149Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName test_terraform_path=/home/runner/work/_temp/e0a167fc-3e3b-4118-9703-b8972b6cca0a/terraform test_working_directory=/tmp/plugintest1533030121 test_step_number=1
2025-09-01T00:42:46.5708428Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5709417Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5710146Z         
2025-09-01T00:42:46.5710890Z         Error: error creating project: test-acc-tf-p-1215348669922914793
2025-09-01T00:42:46.5711552Z         
2025-09-01T00:42:46.5712139Z           with mongodbatlas_project.my_project,
2025-09-01T00:42:46.5713286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-01T00:42:46.5714338Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-01T00:42:46.5714891Z         
2025-09-01T00:42:46.5715754Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5716927Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5718427Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5719562Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5720294Z         BadRequestDetail: 
2025-09-01T00:42:46.5741988Z    test_step_number=1 test_working_directory=/tmp/plugintest1709388202
2025-09-01T00:42:46.5766636Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (1.32s)
```

  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-09-02 PASS 2 minutes
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes