# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027300000) |  | dev |  | 10800.09s
[2025-10-20 10:26](#error-2025-10-20t1026240000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e50de46041f56698987/clusters | dev | out_of_capacity | 3.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 37 minutes
- 2025-09-24 PASS 37 minutes
- 2025-09-25 PASS 34 minutes
- 2025-09-26 PASS 37 minutes
- 2025-09-27 PASS 38 minutes
- 2025-09-28 PASS 42 minutes
- 2025-09-29 PASS 46 minutes
- 2025-09-30
  - PASS 38 minutes
  - PASS 37 minutes
  - PASS 35 minutes
- 2025-10-01
  - PASS 38 minutes
  - PASS 53 minutes
  - PASS 36 minutes
  - PASS an hour
  - PASS 37 minutes
  - PASS 33 minutes
  - PASS 33 minutes
  - PASS 32 minutes
- 2025-10-02 PASS an hour
- 2025-10-03 PASS an hour
- 2025-10-04 PASS 2 hours
- 2025-10-05 PASS 31 minutes
- 2025-10-06 PASS 38 minutes
- 2025-10-07

### Error 2025-10-07T00:27:30+00:00
```
2025-10-07T00:27:30.3800056Z === RUN   TestAccSearchDeployment_basic
2025-10-07T00:27:33.3762617Z === CONT  TestAccSearchDeployment_basic
2025-10-07T03:27:34.1951387Z === NAME  TestAccSearchDeployment_basic
2025-10-07T03:27:34.1953737Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:27:34.1954309Z         
2025-10-07T03:27:34.1954738Z         Error: Error in create
2025-10-07T03:27:34.1955152Z         
2025-10-07T03:27:34.1955669Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:34.1956603Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:34.1957191Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:34.1957598Z         
2025-10-07T03:27:34.1958198Z         cluster=test-acc-tf-c-6521085746612900976 didn't reach desired state: IDLE,
2025-10-07T03:27:34.1958682Z         error: context deadline exceeded
2025-10-07T03:27:34.2412829Z --- FAIL: TestAccSearchDeployment_basic (10800.87s)
```

- 2025-10-08 PASS 40 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 41 minutes
- 2025-10-11 PASS 45 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 42 minutes
- 2025-10-14 PASS 38 minutes
- 2025-10-15 PASS 38 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 38 minutes
- 2025-10-18 PASS 40 minutes
- 2025-10-19 PASS 41 minutes
- 2025-10-20
  - PASS 54 minutes
  - FAIL 3 seconds

### Error 2025-10-20T10:26:24+00:00
```
2025-10-20T10:26:24.1617162Z === RUN   TestAccSearchDeployment_basic
2025-10-20T10:26:30.6145811Z === CONT  TestAccSearchDeployment_basic
2025-10-20T10:26:31.4003962Z === NAME  TestAccSearchDeployment_basic
2025-10-20T10:26:31.4004887Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:26:31.4005565Z         
2025-10-20T10:26:31.4006037Z         Error: Error in create
2025-10-20T10:26:31.4006496Z         
2025-10-20T10:26:31.4007114Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:26:31.4008334Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:26:31.4009444Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:26:31.4009992Z         
2025-10-20T10:26:31.4010700Z         cluster name: test-acc-tf-c-6483693102357339028, API error details:
2025-10-20T10:26:31.4011843Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e50de46041f56698987/clusters
2025-10-20T10:26:31.4013003Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:31.4014506Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:31.4015360Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:31.4463972Z --- FAIL: TestAccSearchDeployment_basic (3.78s)
```

- 2025-10-21 PASS 31 minutes
- 2025-10-22
  - PASS 41 minutes
  - PASS 34 minutes