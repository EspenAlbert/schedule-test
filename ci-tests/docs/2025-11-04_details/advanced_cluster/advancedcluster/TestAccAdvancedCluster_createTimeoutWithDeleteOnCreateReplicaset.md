# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 19) FAIL(x 12)
Success rate: 61.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027520000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e45e8512e64d6587ba6b07/clusters | dev | flaky_500 | 127.05s
[2025-10-09 00:27](#error-2025-10-09t0027320000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e70172c2a3cd1693047695/clusters | dev |  | 127.00s
[2025-10-11 00:26](#error-2025-10-11t0026030000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68e9a419c1365d79b993c143/clusters | dev |  | 127.07s
[2025-10-12 00:28](#error-2025-10-12t0028580000) |  | qa |  | 6096.06s
[2025-10-20 10:26](#error-2025-10-20t1026390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 3.06s
[2025-10-28 00:27](#error-2025-10-28t0027380000) |  | dev |  | 1076.04s
[2025-10-29 00:29](#error-2025-10-29t0029260000) |  | dev |  | 1257.06s
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev | timeout | 11688.04s
[2025-10-31 00:27](#error-2025-10-31t0027460000) |  | dev |  | 1234.01s
[2025-11-02 00:29](#error-2025-11-02t0029520000) |  | qa |  | 5.01s
[2025-11-03 00:29](#error-2025-11-03t0029160000) |  | dev |  | 1161.07s
[2025-11-04 00:27](#error-2025-11-04t0027200000) |  | dev | real_test_failure | 1132.03s

## Timeline
- 2025-10-05: MISSING
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
- 2025-10-23 PASS 23 minutes
- 2025-10-24 PASS 59 minutes
- 2025-10-25 PASS 38 minutes
- 2025-10-26 PASS 18 minutes
- 2025-10-27 PASS an hour
- 2025-10-28

### Error 2025-10-28T00:27:38+00:00
```
2025-10-28T00:27:38.6444817Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-28T00:29:11.1747213Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-28T00:42:33.1596509Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-28T00:42:33.1597401Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-10-28T00:42:33.1597816Z         
2025-10-28T00:42:33.1598600Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-10-28T00:42:33.1599281Z         
2025-10-28T00:42:33.1599707Z           with mongodbatlas_advanced_cluster.test,
2025-10-28T00:42:33.1600425Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-28T00:42:33.1601061Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-28T00:42:33.1601523Z         
2025-10-28T00:42:33.1601800Z         The current state value is true
2025-10-28T00:47:07.4892927Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1076.36s)
```

- 2025-10-29

### Error 2025-10-29T00:29:26+00:00
```
2025-10-29T00:29:26.1550153Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-29T00:30:55.9261607Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-29T00:45:47.6491698Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-29T00:45:47.6492364Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-10-29T00:45:47.6492796Z         
2025-10-29T00:45:47.6493676Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-10-29T00:45:47.6494250Z         
2025-10-29T00:45:47.6494578Z           with mongodbatlas_advanced_cluster.test,
2025-10-29T00:45:47.6495540Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-29T00:45:47.6496160Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-29T00:45:47.6496478Z         
2025-10-29T00:45:47.6496746Z         The current state value is true
2025-10-29T00:51:53.5281703Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1257.62s)
```

- 2025-10-30

### Error 2025-10-30T00:28:24+00:00
```
2025-10-30T00:28:24.3485572Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-30T00:29:52.4725682Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-30T00:44:40.4520499Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-30T00:44:40.4521333Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-10-30T00:44:40.4521923Z         
2025-10-30T00:44:40.4522684Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-10-30T00:44:40.4523226Z         
2025-10-30T00:44:40.4523738Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T00:44:40.4524400Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T00:44:40.4525087Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T00:44:40.4525646Z         
2025-10-30T00:44:40.4525918Z         The current state value is true
2025-10-30T00:47:44.8623916Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest1889643987 test_step_number=2
2025-10-30T03:44:40.8986660Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-30T03:44:40.8987449Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:40.8987950Z         
2025-10-30T03:44:40.8988231Z         Error: Error in delete
2025-10-30T03:44:40.8988502Z         
2025-10-30T03:44:40.8989438Z         cluster=test-acc-tf-c-7558724466536901345 didn't reach desired state:
2025-10-30T03:44:40.8990123Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:44:40.8990647Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:40.8991147Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (11688.43s)
```

- 2025-10-31

### Error 2025-10-31T00:27:46+00:00
```
2025-10-31T00:27:46.2581183Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-31T00:29:24.5224914Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-31T00:43:21.6150836Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-10-31T00:43:21.6151601Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-10-31T00:43:21.6152105Z         
2025-10-31T00:43:21.6152939Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-10-31T00:43:21.6153733Z         
2025-10-31T00:43:21.6154157Z           with mongodbatlas_advanced_cluster.test,
2025-10-31T00:43:21.6154846Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-31T00:43:21.6155599Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-31T00:43:21.6155982Z         
2025-10-31T00:43:21.6156252Z         The current state value is true
2025-10-31T00:49:58.6499142Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1234.14s)
```

- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:52+00:00
```
2025-11-02T00:29:52.3263847Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-02T00:31:20.5876855Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-02T00:31:25.2657399Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-02T00:31:25.2659078Z     resource_test.go:1114: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-02T00:31:25.2664961Z         
2025-11-02T00:31:25.2678600Z         Error: Error in create
2025-11-02T00:31:25.2679044Z         
2025-11-02T00:31:25.2679588Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.2680838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.2681925Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.2682478Z         
2025-11-02T00:31:25.2683533Z         cluster name: test-acc-tf-c-1129926829798749559, API error details:
2025-11-02T00:31:25.2684749Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fd5ace12378d2962e9/clusters
2025-11-02T00:31:25.2685671Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.2686567Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.2687743Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.2689012Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.2689713Z         BadRequestDetail: 
2025-11-02T00:31:25.2787904Z   
2025-11-02T00:31:25.6744693Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (5.09s)
```

- 2025-11-03

### Error 2025-11-03T00:29:16+00:00
```
2025-11-03T00:29:16.1729420Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-03T00:30:50.2521584Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-03T00:46:38.9352770Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-03T00:46:38.9353937Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-11-03T00:46:38.9354641Z         
2025-11-03T00:46:38.9356110Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-11-03T00:46:38.9356777Z         
2025-11-03T00:46:38.9357278Z           with mongodbatlas_advanced_cluster.test,
2025-11-03T00:46:38.9358307Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-03T00:46:38.9359202Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-03T00:46:38.9359876Z         
2025-11-03T00:46:38.9360168Z         The current state value is true
2025-11-03T00:50:11.9204674Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1161.68s)
```

- 2025-11-04

### Error 2025-11-04T00:27:20+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-04T00:27:20.776000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='17 seconds ago')

```
2025-11-04T00:27:20.7769615Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-04T00:28:44.0468457Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-04T00:41:31.2709261Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-04T00:41:31.2710869Z     resource_test.go:1114: Step 4/6 error: Error running pre-apply plan: exit status 1
2025-11-04T00:41:31.2711754Z         
2025-11-04T00:41:31.2713538Z         Error: delete_on_create_timeout cannot be updated or set after import, remove it from the configuration or use the state value (see below).
2025-11-04T00:41:31.2714866Z         
2025-11-04T00:41:31.2715647Z           with mongodbatlas_advanced_cluster.test,
2025-11-04T00:41:31.2717239Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-04T00:41:31.2717899Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-04T00:41:31.2718221Z         
2025-11-04T00:41:31.2718494Z         The current state value is true
2025-11-04T00:47:36.3369917Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1132.29s)
```
