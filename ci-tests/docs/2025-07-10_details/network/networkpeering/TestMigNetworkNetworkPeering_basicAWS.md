# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 108) FAIL(x 5)
Success rate: 95.58%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 4.03s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.06s
[2025-06-22 00:44](#error-2025-06-22t0044140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574ef1af7a0954e84adeb9/limits | qa | flaky_500 | 35.01s
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898656291349dce6c991/limits | qa | flaky_500 | 200.01s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4087267b5775b68310d/limits | qa | flaky_500 | 36.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 2 minutes
- 2025-04-13 PASS 2 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 2 minutes
- 2025-04-16
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-04-17 PASS 2 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 3 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 2 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 2 minutes
- 2025-04-25 PASS 3 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 2 minutes
- 2025-04-28 PASS 3 minutes
- 2025-04-29 PASS 2 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-05-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-05-02 PASS 2 minutes
- 2025-05-03 PASS 2 minutes
- 2025-05-04 PASS 3 minutes
- 2025-05-05 PASS 2 minutes
- 2025-05-06 PASS 2 minutes
- 2025-05-07 PASS 2 minutes
- 2025-05-08 PASS 3 minutes
- 2025-05-09 PASS 2 minutes
- 2025-05-10 PASS 2 minutes
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8708378Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8731773Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8798018Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8798651Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8799272Z         
2025-05-11T00:29:57.8799716Z         Error: error creating project: test-acc-tf-p-4627972310947748371
2025-05-11T00:29:57.8800113Z         
2025-05-11T00:29:57.8802461Z           with mongodbatlas_project.my_project,
2025-05-11T00:29:57.8803609Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-05-11T00:29:57.8804918Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-05-11T00:29:57.8805563Z         
2025-05-11T00:29:57.8806417Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8807210Z         type
2025-05-11T00:29:57.8807737Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (4.33s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-05-14 PASS 3 minutes
- 2025-05-15 PASS 2 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 2 minutes
- 2025-05-18 PASS 3 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 2 minutes
- 2025-05-21 PASS 2 minutes
- 2025-05-22 PASS 2 minutes
- 2025-05-23 PASS 3 minutes
- 2025-05-24 PASS 2 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 2 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 2 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 2 minutes
- 2025-06-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-06-03 PASS 2 minutes
- 2025-06-04 PASS 2 minutes
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2429758Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2438727Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2499045Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2499689Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2500152Z         
2025-06-05T00:54:09.2500640Z         Error: error creating project: test-acc-tf-p-8818515825033124931
2025-06-05T00:54:09.2501011Z         
2025-06-05T00:54:09.2501355Z           with mongodbatlas_project.my_project,
2025-06-05T00:54:09.2502015Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-06-05T00:54:09.2502637Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-06-05T00:54:09.2502966Z         
2025-06-05T00:54:09.2503457Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2504108Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2504700Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2505137Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3.61s)
```

- 2025-06-06 PASS 2 minutes
- 2025-06-07 PASS 2 minutes
- 2025-06-08 PASS 2 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 2 minutes
- 2025-06-14 PASS 3 minutes
- 2025-06-15 PASS 2 minutes
- 2025-06-16 PASS 3 minutes
- 2025-06-17 PASS 3 minutes
- 2025-06-18 PASS 3 minutes
- 2025-06-19 PASS 2 minutes
- 2025-06-20 PASS 3 minutes
- 2025-06-21 PASS 2 minutes
- 2025-06-22

### Error 2025-06-22T00:44:14+00:00
```
2025-06-22T00:44:14.8815509Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8826002Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8881049Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8882134Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:14.8882946Z         
2025-06-22T00:44:14.8883637Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8884423Z         
2025-06-22T00:44:14.8885008Z           with mongodbatlas_project.my_project,
2025-06-22T00:44:14.8886151Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-06-22T00:44:14.8887203Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-06-22T00:44:14.8887763Z         
2025-06-22T00:44:14.8888584Z         error getting project (68574ef1af7a0954e84adeb9): error getting project's
2025-06-22T00:44:14.8889428Z         limits (68574ef1af7a0954e84adeb9):
2025-06-22T00:44:14.8890459Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef1af7a0954e84adeb9/limits
2025-06-22T00:44:14.8891677Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.8892733Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.8893452Z         BadRequestDetail: 
2025-06-22T00:44:14.8894029Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (35.09s)
```

- 2025-06-23 PASS 2 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 2 minutes
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8006525Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-29T00:44:25.8016881Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-29T00:44:25.8040797Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-06-29T00:44:25.8042036Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8042932Z         
2025-06-29T00:44:25.8043621Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8044214Z         
2025-06-29T00:44:25.8044790Z           with mongodbatlas_project.my_project,
2025-06-29T00:44:25.8045924Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-06-29T00:44:25.8046979Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-06-29T00:44:25.8047534Z         
2025-06-29T00:44:25.8048338Z         error getting project (6860898656291349dce6c991): error getting project's
2025-06-29T00:44:25.8049142Z         limits (6860898656291349dce6c991):
2025-06-29T00:44:25.8050323Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898656291349dce6c991/limits
2025-06-29T00:44:25.8051557Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8052625Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8053342Z         BadRequestDetail: 
2025-06-29T00:44:25.8054653Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (200.15s)
```

- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 2 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6238782Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6249244Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6276265Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6277356Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:44:46.6278186Z         
2025-07-06T00:44:46.6278898Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6279495Z         
2025-07-06T00:44:46.6280134Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6281323Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6282392Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6282953Z         
2025-07-06T00:44:46.6283778Z         error getting project (6869c4087267b5775b68310d): error getting project's
2025-07-06T00:44:46.6284761Z         limits (6869c4087267b5775b68310d):
2025-07-06T00:44:46.6285811Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4087267b5775b68310d/limits
2025-07-06T00:44:46.6287045Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6288117Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6288845Z         BadRequestDetail: 
2025-07-06T00:44:46.6289430Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (36.12s)
```

- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 2 minutes