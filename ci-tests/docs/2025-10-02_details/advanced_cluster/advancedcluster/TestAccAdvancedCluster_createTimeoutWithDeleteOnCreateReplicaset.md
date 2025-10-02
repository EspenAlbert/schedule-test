# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027220000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68d5dde7f8df4c6a73fc7038/clusters | dev |  | 127.00s
[2025-10-01 00:28](#error-2025-10-01t0028360000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dc75b10c72c45ec9a8f496/clusters | dev |  | 126.07s
[2025-10-01 03:22](#error-2025-10-01t0322380000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dc9e7c5b2d552e98f51798/clusters | dev |  | 127.03s
[2025-10-01 04:55](#error-2025-10-01t0455090000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dcb42a5b2d552e98f72bef/clusters | dev |  | 127.02s
[2025-10-01 07:28](#error-2025-10-01t0728330000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dcd81e5a2f9645002336dc/clusters | dev | flaky_500 | 127.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 28 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 25 minutes
- 2025-09-07 PASS 30 minutes
- 2025-09-08
  - PASS 26 minutes
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-09-09 PASS 26 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 16 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21 PASS 14 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 19 minutes
- 2025-09-26

### Error 2025-09-26T00:27:22+00:00
```
2025-09-26T00:27:22.0657211Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-26T00:28:50.9813453Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-26T00:30:57.9876912Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-26T00:30:57.9877663Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-09-26T00:30:57.9878154Z         
2025-09-26T00:30:57.9878409Z         Error: Error in create
2025-09-26T00:30:57.9878652Z         
2025-09-26T00:30:57.9878971Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T00:30:57.9879654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T00:30:57.9880262Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T00:30:57.9880578Z         
2025-09-26T00:30:57.9880985Z         cluster name: test-acc-tf-c-4209659558436150727, API error details:
2025-09-26T00:30:57.9881661Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5dde7f8df4c6a73fc7038/clusters
2025-09-26T00:30:57.9882348Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-09-26T00:30:57.9882967Z         cluster or serverless instance named test-acc-tf-c-4209659558436150727 is
2025-09-26T00:30:57.9883577Z         already present in group 68d5dde7f8df4c6a73fc7038. Reason: Bad Request.
2025-09-26T00:30:57.9884173Z         Params: [cluster or serverless instance test-acc-tf-c-4209659558436150727
2025-09-26T00:30:57.9884779Z         68d5dde7f8df4c6a73fc7038], BadRequestDetail: 
2025-09-26T00:30:58.0324862Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.05s)
```

- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 14 minutes
- 2025-09-29
  - PASS 30 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 12 minutes
- 2025-10-01
  - FAIL 2 minutes

### Error 2025-10-01T00:28:36+00:00
```
2025-10-01T00:28:36.2795886Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T00:30:01.0308698Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T00:32:07.6912545Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T00:32:07.6913252Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-01T00:32:07.6913704Z         
2025-10-01T00:32:07.6913951Z         Error: Error in create
2025-10-01T00:32:07.6914182Z         
2025-10-01T00:32:07.6914824Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T00:32:07.6915628Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T00:32:07.6916230Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T00:32:07.6916533Z         
2025-10-01T00:32:07.6916942Z         cluster name: test-acc-tf-c-7859059416988056048, API error details:
2025-10-01T00:32:07.6917609Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75b10c72c45ec9a8f496/clusters
2025-10-01T00:32:07.6918281Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-01T00:32:07.6918906Z         cluster or serverless instance named test-acc-tf-c-7859059416988056048 is
2025-10-01T00:32:07.6919522Z         already present in group 68dc75b10c72c45ec9a8f496. Reason: Bad Request.
2025-10-01T00:32:07.6920114Z         Params: [cluster or serverless instance test-acc-tf-c-7859059416988056048
2025-10-01T00:32:07.6920596Z         68dc75b10c72c45ec9a8f496], BadRequestDetail: 
2025-10-01T00:32:07.7397460Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (126.71s)
```

  - FAIL 2 minutes

### Error 2025-10-01T03:22:38+00:00
```
2025-10-01T03:22:38.3953077Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T03:23:59.5096151Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T03:26:06.7979200Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T03:26:06.7979810Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-01T03:26:06.7980183Z         
2025-10-01T03:26:06.7980434Z         Error: Error in create
2025-10-01T03:26:06.7980673Z         
2025-10-01T03:26:06.7981054Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T03:26:06.7982169Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T03:26:06.7982889Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T03:26:06.7983199Z         
2025-10-01T03:26:06.7983921Z         cluster name: test-acc-tf-c-4907668746941698018, API error details:
2025-10-01T03:26:06.7984757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc9e7c5b2d552e98f51798/clusters
2025-10-01T03:26:06.7985549Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-01T03:26:06.7986287Z         cluster or serverless instance named test-acc-tf-c-4907668746941698018 is
2025-10-01T03:26:06.7987006Z         already present in group 68dc9e7c5b2d552e98f51798. Reason: Bad Request.
2025-10-01T03:26:06.7987712Z         Params: [cluster or serverless instance test-acc-tf-c-4907668746941698018
2025-10-01T03:26:06.7988210Z         68dc9e7c5b2d552e98f51798], BadRequestDetail: 
2025-10-01T03:26:06.8418365Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.34s)
```

  - FAIL 2 minutes

### Error 2025-10-01T04:55:09+00:00
```
2025-10-01T04:55:09.6328199Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T04:56:43.0409335Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T04:58:50.1541100Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T04:58:50.1542203Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-01T04:58:50.1542871Z         
2025-10-01T04:58:50.1543592Z         Error: Error in create
2025-10-01T04:58:50.1544192Z         
2025-10-01T04:58:50.1544564Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T04:58:50.1545403Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T04:58:50.1546164Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T04:58:50.1546486Z         
2025-10-01T04:58:50.1547030Z         cluster name: test-acc-tf-c-1401138994667982022, API error details:
2025-10-01T04:58:50.1547854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb42a5b2d552e98f72bef/clusters
2025-10-01T04:58:50.1548654Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-01T04:58:50.1549410Z         cluster or serverless instance named test-acc-tf-c-1401138994667982022 is
2025-10-01T04:58:50.1550237Z         already present in group 68dcb42a5b2d552e98f72bef. Reason: Bad Request.
2025-10-01T04:58:50.1551141Z         Params: [cluster or serverless instance test-acc-tf-c-1401138994667982022
2025-10-01T04:58:50.1551648Z         68dcb42a5b2d552e98f72bef], BadRequestDetail: 
2025-10-01T04:58:50.1999803Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.17s)
```

  - FAIL 2 minutes

### Error 2025-10-01T07:28:33+00:00
```
2025-10-01T07:28:33.2127436Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T07:30:00.9388542Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T07:32:08.6778941Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-01T07:32:08.6779753Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-01T07:32:08.6780230Z         
2025-10-01T07:32:08.6780494Z         Error: Error in create
2025-10-01T07:32:08.6780747Z         
2025-10-01T07:32:08.6781084Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T07:32:08.6781775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T07:32:08.6782404Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T07:32:08.6782723Z         
2025-10-01T07:32:08.6783160Z         cluster name: test-acc-tf-c-4435408356416650325, API error details:
2025-10-01T07:32:08.6784037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcd81e5a2f9645002336dc/clusters
2025-10-01T07:32:08.6784773Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-01T07:32:08.6785394Z         cluster or serverless instance named test-acc-tf-c-4435408356416650325 is
2025-10-01T07:32:08.6785997Z         already present in group 68dcd81e5a2f9645002336dc. Reason: Bad Request.
2025-10-01T07:32:08.6786598Z         Params: [cluster or serverless instance test-acc-tf-c-4435408356416650325
2025-10-01T07:32:08.6787083Z         68dcd81e5a2f9645002336dc], BadRequestDetail: 
2025-10-01T07:32:08.7325787Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.82s)
```

  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-10-02 PASS 21 minutes