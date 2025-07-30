# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029540000) |  | dev | timeout | 10803.00s
[2025-07-14 00:31](#error-2025-07-14t0031030000) |  | dev | timeout | 10803.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 24 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 24 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 27 minutes
- 2025-07-10
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:29:54+00:00
```
2025-07-11T00:29:54.3954622Z === RUN   TestAccSearchDeployment_multiRegion
2025-07-11T00:29:54.3955720Z     resource_test.go:117: Creating execution project: test-acc-tf-p-3742349483835172288
2025-07-11T00:29:56.0180003Z === CONT  TestAccSearchDeployment_multiRegion
2025-07-11T03:29:57.3467944Z === NAME  TestAccSearchDeployment_multiRegion
2025-07-11T03:29:57.3468924Z     resource_test.go:129: Step 1/1 error: Error running apply: exit status 1
2025-07-11T03:29:57.3469530Z         
2025-07-11T03:29:57.3470738Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:57.3471799Z         
2025-07-11T03:29:57.3472395Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-11T03:29:57.3473831Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-11T03:29:57.3474939Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-11T03:29:57.3475483Z         
2025-07-11T03:29:57.3972667Z --- FAIL: TestAccSearchDeployment_multiRegion (10803.00s)
```

- 2025-07-12 PASS 24 minutes
- 2025-07-13 PASS 30 minutes
- 2025-07-14

### Error 2025-07-14T00:31:03+00:00
```
2025-07-14T00:31:03.4493341Z === RUN   TestAccSearchDeployment_multiRegion
2025-07-14T00:31:03.4494365Z     resource_test.go:117: Creating execution project: test-acc-tf-p-8937480586329243608
2025-07-14T00:31:05.9340428Z === CONT  TestAccSearchDeployment_multiRegion
2025-07-14T03:31:07.0247663Z   
2025-07-14T03:31:07.0693274Z === NAME  TestAccSearchDeployment_multiRegion
2025-07-14T03:31:07.0694170Z     resource_test.go:129: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:07.0694948Z         
2025-07-14T03:31:07.0696086Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:07.0697030Z         
2025-07-14T03:31:07.0697636Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:07.0698854Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:07.0700008Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:07.0700567Z         
2025-07-14T03:31:07.1226839Z --- FAIL: TestAccSearchDeployment_multiRegion (10803.67s)
```

- 2025-07-15 PASS 25 minutes
- 2025-07-16 PASS 24 minutes
- 2025-07-17 PASS 23 minutes
- 2025-07-18 PASS 31 minutes
- 2025-07-19 PASS 24 minutes
- 2025-07-20 PASS 25 minutes
- 2025-07-21 PASS 22 minutes
- 2025-07-22 PASS 21 minutes
- 2025-07-23
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-07-24 PASS 23 minutes
- 2025-07-25 PASS 27 minutes
- 2025-07-26 PASS 25 minutes
- 2025-07-27 PASS 25 minutes
- 2025-07-28 PASS 25 minutes
- 2025-07-29 PASS 23 minutes
- 2025-07-30 PASS 26 minutes