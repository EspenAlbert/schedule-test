# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027300000) |  | dev |  | 10801.10s
[2025-10-20 10:26](#error-2025-10-20t1026270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e50de46041f56698987/clusters | dev | out_of_capacity | 2.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 47 minutes
- 2025-09-24 PASS 49 minutes
- 2025-09-25 PASS 51 minutes
- 2025-09-26 PASS 50 minutes
- 2025-09-27 PASS 50 minutes
- 2025-09-28 PASS 51 minutes
- 2025-09-29 PASS 57 minutes
- 2025-09-30
  - PASS 50 minutes
  - PASS 51 minutes
  - PASS 47 minutes
- 2025-10-01
  - PASS 48 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS an hour
  - PASS 48 minutes
  - PASS 46 minutes
  - PASS 50 minutes
  - PASS 43 minutes
- 2025-10-02 PASS an hour
- 2025-10-03 PASS an hour
- 2025-10-04 PASS 2 hours
- 2025-10-05 PASS 44 minutes
- 2025-10-06 PASS 49 minutes
- 2025-10-07

### Error 2025-10-07T00:27:30+00:00
```
2025-10-07T00:27:30.3800990Z === RUN   TestAccSearchDeployment_timeoutTest
2025-10-07T00:27:33.3758933Z === CONT  TestAccSearchDeployment_timeoutTest
2025-10-07T03:27:34.2545859Z === NAME  TestAccSearchDeployment_timeoutTest
2025-10-07T03:27:34.2546967Z     resource_test.go:81: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-07T03:27:34.2547506Z         
2025-10-07T03:27:34.2547904Z         Error: Error in create
2025-10-07T03:27:34.2548210Z         
2025-10-07T03:27:34.2548625Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:34.2549423Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:34.2549963Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:34.2550253Z         
2025-10-07T03:27:34.2550667Z         cluster=test-acc-tf-c-180954395526110895 didn't reach desired state: IDLE,
2025-10-07T03:27:34.2551110Z         error: context deadline exceeded
2025-10-07T03:27:34.3006056Z --- FAIL: TestAccSearchDeployment_timeoutTest (10801.97s)
```

- 2025-10-08 PASS 52 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 51 minutes
- 2025-10-11 PASS 51 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 51 minutes
- 2025-10-14 PASS 51 minutes
- 2025-10-15 PASS 46 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 51 minutes
- 2025-10-18 PASS 45 minutes
- 2025-10-19 PASS 51 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 2 seconds

### Error 2025-10-20T10:26:27+00:00
```
2025-10-20T10:26:27.1048542Z === RUN   TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:30.6147072Z === CONT  TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:31.4002631Z    test_name=TestAccSearchDeployment_basic test_terraform_path=/home/runner/work/_temp/bfc4fb77-856f-44ab-adc1-5536795b61a0/terraform
2025-10-20T10:26:31.6565521Z === NAME  TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:31.6566300Z     resource_test.go:81: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-20T10:26:31.6566952Z         
2025-10-20T10:26:31.6567223Z         Error: Error in create
2025-10-20T10:26:31.6567475Z         
2025-10-20T10:26:31.6567809Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:26:31.6568454Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:26:31.6569039Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:26:31.6569353Z         
2025-10-20T10:26:31.6569767Z         cluster name: test-acc-tf-c-7806189344093345135, API error details:
2025-10-20T10:26:31.6570429Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e50de46041f56698987/clusters
2025-10-20T10:26:31.6571098Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:31.6571730Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:31.6572211Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:31.7027224Z --- FAIL: TestAccSearchDeployment_timeoutTest (2.59s)
```

- 2025-10-21 PASS 46 minutes
- 2025-10-22
  - PASS 55 minutes
  - PASS 45 minutes