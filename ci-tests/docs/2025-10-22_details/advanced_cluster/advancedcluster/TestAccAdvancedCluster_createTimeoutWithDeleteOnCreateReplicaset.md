# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 31) FAIL(x 13)
Success rate: 70.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027220000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68d5dde7f8df4c6a73fc7038/clusters | dev |  | 127.00s
[2025-10-01 00:28](#error-2025-10-01t0028360000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dc75b10c72c45ec9a8f496/clusters | dev |  | 126.07s
[2025-10-01 03:22](#error-2025-10-01t0322380000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dc9e7c5b2d552e98f51798/clusters | dev |  | 127.03s
[2025-10-01 04:55](#error-2025-10-01t0455090000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dcb42a5b2d552e98f72bef/clusters | dev |  | 127.02s
[2025-10-01 07:28](#error-2025-10-01t0728330000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68dcd81e5a2f9645002336dc/clusters | dev | flaky_500 | 127.08s
[2025-10-03 00:26](#error-2025-10-03t0026280000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68df18325ed0e32a8dd2329c/clusters | dev |  | 127.05s
[2025-10-04 00:26](#error-2025-10-04t0026130000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e069a2065c07374c39c0c0/clusters | dev |  | 126.06s
[2025-10-05 00:29](#error-2025-10-05t0029540000) |  | qa |  | 4.06s
[2025-10-07 00:27](#error-2025-10-07t0027520000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e45e8512e64d6587ba6b07/clusters | dev | flaky_500 | 127.05s
[2025-10-09 00:27](#error-2025-10-09t0027320000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e70172c2a3cd1693047695/clusters | dev |  | 127.00s
[2025-10-11 00:26](#error-2025-10-11t0026030000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e9a419c1365d79b993c143/clusters | dev |  | 127.07s
[2025-10-12 00:28](#error-2025-10-12t0028580000) |  | qa |  | 6096.06s
[2025-10-20 10:26](#error-2025-10-20t1026390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 3.06s

## Timeline
- 2025-09-22: MISSING
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
- 2025-10-03

### Error 2025-10-03T00:26:28+00:00
```
2025-10-03T00:26:28.4638335Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-03T00:28:04.6525728Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-03T00:30:12.1208004Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-03T00:30:12.1209040Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-03T00:30:12.1209654Z         
2025-10-03T00:30:12.1210052Z         Error: Error in create
2025-10-03T00:30:12.1210446Z         
2025-10-03T00:30:12.1210995Z           with mongodbatlas_advanced_cluster.test,
2025-10-03T00:30:12.1212120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-03T00:30:12.1213149Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-03T00:30:12.1213669Z         
2025-10-03T00:30:12.1214360Z         cluster name: test-acc-tf-c-2646755640885965217, API error details:
2025-10-03T00:30:12.1215527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68df18325ed0e32a8dd2329c/clusters
2025-10-03T00:30:12.1216828Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-03T00:30:12.1217907Z         cluster or serverless instance named test-acc-tf-c-2646755640885965217 is
2025-10-03T00:30:12.1218974Z         already present in group 68df18325ed0e32a8dd2329c. Reason: Bad Request.
2025-10-03T00:30:12.1220017Z         Params: [cluster or serverless instance test-acc-tf-c-2646755640885965217
2025-10-03T00:30:12.1220866Z         68df18325ed0e32a8dd2329c], BadRequestDetail: 
2025-10-03T00:30:12.1735879Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.52s)
```

- 2025-10-04

### Error 2025-10-04T00:26:13+00:00
```
2025-10-04T00:26:13.8472827Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-04T00:27:49.8960116Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-04T00:29:56.3882828Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-04T00:29:56.3883727Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-04T00:29:56.3884230Z         
2025-10-04T00:29:56.3884493Z         Error: Error in create
2025-10-04T00:29:56.3884764Z         
2025-10-04T00:29:56.3885165Z           with mongodbatlas_advanced_cluster.test,
2025-10-04T00:29:56.3885888Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-04T00:29:56.3886506Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-04T00:29:56.3886832Z         
2025-10-04T00:29:56.3887478Z         cluster name: test-acc-tf-c-8283565233294845296, API error details:
2025-10-04T00:29:56.3888347Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e069a2065c07374c39c0c0/clusters
2025-10-04T00:29:56.3888983Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-04T00:29:56.3889557Z         cluster or serverless instance named test-acc-tf-c-8283565233294845296 is
2025-10-04T00:29:56.3890138Z         already present in group 68e069a2065c07374c39c0c0. Reason: Bad Request.
2025-10-04T00:29:56.3890694Z         Params: [cluster or serverless instance test-acc-tf-c-8283565233294845296
2025-10-04T00:29:56.3891216Z         68e069a2065c07374c39c0c0], BadRequestDetail: 
2025-10-04T00:29:56.4405719Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (126.55s)
```

- 2025-10-05

### Error 2025-10-05T00:29:54+00:00
```
2025-10-05T00:29:54.0357517Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-05T00:31:26.4140258Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-05T00:31:30.7180802Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-05T00:31:30.7182219Z     resource_test.go:1124: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-05T00:31:30.7183061Z         
2025-10-05T00:31:30.7183492Z         Error: Error in create
2025-10-05T00:31:30.7184341Z         
2025-10-05T00:31:30.7193390Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.7195051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.7196526Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.7197254Z         
2025-10-05T00:31:30.7238077Z         cluster name: test-acc-tf-c-251901275879244440, API error details:
2025-10-05T00:31:30.7239373Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfffec65822ddfca6a0/clusters
2025-10-05T00:31:30.7240302Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.7241193Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.7242264Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.7243318Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.7244173Z         BadRequestDetail: 
2025-10-05T00:31:30.7440300Z    test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/d6726d11-c2b5-40bc-b1fa-9f3e3dd393d4/terraform test_working_directory=/tmp/plugintest2841064397
2025-10-05T00:31:31.0559598Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (4.59s)
```

- 2025-10-06 PASS 13 minutes
- 2025-10-07

### Error 2025-10-07T00:27:52+00:00
```
2025-10-07T00:27:52.3799106Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-07T00:30:14.9651256Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-07T00:32:22.3599972Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-07T00:32:22.3601030Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-07T00:32:22.3601656Z         
2025-10-07T00:32:22.3602093Z         Error: Error in create
2025-10-07T00:32:22.3602509Z         
2025-10-07T00:32:22.3603081Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T00:32:22.3604237Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T00:32:22.3605432Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T00:32:22.3606023Z         
2025-10-07T00:32:22.3606812Z         cluster name: test-acc-tf-c-1497216122500424152, API error details:
2025-10-07T00:32:22.3607986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e8512e64d6587ba6b07/clusters
2025-10-07T00:32:22.3609162Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-07T00:32:22.3610256Z         cluster or serverless instance named test-acc-tf-c-1497216122500424152 is
2025-10-07T00:32:22.3611322Z         already present in group 68e45e8512e64d6587ba6b07. Reason: Bad Request.
2025-10-07T00:32:22.3612391Z         Params: [cluster or serverless instance test-acc-tf-c-1497216122500424152
2025-10-07T00:32:22.3613209Z         68e45e8512e64d6587ba6b07], BadRequestDetail: 
2025-10-07T00:32:22.4069583Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.46s)
```

- 2025-10-08 PASS 15 minutes
- 2025-10-09

### Error 2025-10-09T00:27:32+00:00
```
2025-10-09T00:27:32.2604250Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-09T00:35:20.1790141Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-09T00:37:27.1511008Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-09T00:37:27.1511669Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-09T00:37:27.1512170Z         
2025-10-09T00:37:27.1512426Z         Error: Error in create
2025-10-09T00:37:27.1512677Z         
2025-10-09T00:37:27.1512993Z           with mongodbatlas_advanced_cluster.test,
2025-10-09T00:37:27.1513623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-09T00:37:27.1514212Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-09T00:37:27.1514518Z         
2025-10-09T00:37:27.1514915Z         cluster name: test-acc-tf-c-1894608071291981193, API error details:
2025-10-09T00:37:27.1515564Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70172c2a3cd1693047695/clusters
2025-10-09T00:37:27.1516216Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-09T00:37:27.1517090Z         cluster or serverless instance named test-acc-tf-c-1894608071291981193 is
2025-10-09T00:37:27.1517974Z         already present in group 68e70172c2a3cd1693047695. Reason: Bad Request.
2025-10-09T00:37:27.1518569Z         Params: [cluster or serverless instance test-acc-tf-c-1894608071291981193
2025-10-09T00:37:27.1519243Z         68e70172c2a3cd1693047695], BadRequestDetail: 
2025-10-09T00:37:27.1969280Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.03s)
```

- 2025-10-10 PASS 21 minutes
- 2025-10-11

### Error 2025-10-11T00:26:03+00:00
```
2025-10-11T00:26:03.5101983Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-11T00:28:29.8509089Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-11T00:30:37.4597119Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-11T00:30:37.4598177Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-11T00:30:37.4598816Z         
2025-10-11T00:30:37.4599251Z         Error: Error in create
2025-10-11T00:30:37.4599688Z         
2025-10-11T00:30:37.4601688Z           with mongodbatlas_advanced_cluster.test,
2025-10-11T00:30:37.4602903Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-11T00:30:37.4603956Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-11T00:30:37.4604493Z         
2025-10-11T00:30:37.4605384Z         cluster name: test-acc-tf-c-641259294495273862, API error details:
2025-10-11T00:30:37.4606578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a419c1365d79b993c143/clusters
2025-10-11T00:30:37.4607760Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-10-11T00:30:37.4608842Z         cluster or serverless instance named test-acc-tf-c-641259294495273862 is
2025-10-11T00:30:37.4609939Z         already present in group 68e9a419c1365d79b993c143. Reason: Bad Request.
2025-10-11T00:30:37.4611012Z         Params: [cluster or serverless instance test-acc-tf-c-641259294495273862
2025-10-11T00:30:37.4611852Z         68e9a419c1365d79b993c143], BadRequestDetail: 
2025-10-11T00:30:37.5108707Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.66s)
```

- 2025-10-12

### Error 2025-10-12T00:28:58+00:00
```
2025-10-12T00:28:58.5218651Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-12T00:30:21.7893528Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-12T02:11:58.3824290Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-12T02:11:58.3825420Z     resource_test.go:1124: Step 2/6 error: Error running apply: exit status 1
2025-10-12T02:11:58.3826082Z         
2025-10-12T02:11:58.3826543Z         Error: Error in create
2025-10-12T02:11:58.3826953Z         
2025-10-12T02:11:58.3827757Z           with mongodbatlas_advanced_cluster.test,
2025-10-12T02:11:58.3829241Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-12T02:11:58.3830089Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-12T02:11:58.3830401Z         
2025-10-12T02:11:58.3831145Z         cluster=test-acc-tf-c-881709391789283788 didn't reach desired state: IDLE,
2025-10-12T02:11:58.3831604Z         error: context deadline exceeded
2025-10-12T02:11:58.4270818Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6096.65s)
```

- 2025-10-13 PASS 18 minutes
- 2025-10-14 PASS 17 minutes
- 2025-10-15 PASS 16 minutes
- 2025-10-16 PASS 26 minutes
- 2025-10-17 PASS 19 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 27 minutes
  - FAIL 3 seconds

### Error 2025-10-20T10:26:39+00:00
```
2025-10-20T10:26:39.5476297Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-20T10:28:27.7312095Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-20T10:28:31.2757272Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-20T10:28:31.2758718Z     resource_test.go:1114: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-20T10:28:31.2760212Z         
2025-10-20T10:28:31.2760672Z         Error: Error in create
2025-10-20T10:28:31.2761103Z         
2025-10-20T10:28:31.2761660Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:31.2762877Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:31.2763994Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:31.2764574Z         
2025-10-20T10:28:31.2765312Z         cluster name: test-acc-tf-c-2925722272970152623, API error details:
2025-10-20T10:28:31.2766693Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters
2025-10-20T10:28:31.2767917Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:31.2769049Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:31.2769901Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:31.3522038Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (3.62s)
```

- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 21 minutes
  - PASS 16 minutes