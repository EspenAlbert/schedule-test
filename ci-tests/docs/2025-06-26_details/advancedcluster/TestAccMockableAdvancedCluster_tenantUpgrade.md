# advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 18 minutes
```
2025-05-28T01:22:00.9728195Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T01:22:00.9730122Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-28T01:23:14.8210930Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T01:24:19.7912409Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T01:24:24.7923395Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:24:19.790994259Z, ProjectID: 68365ae81e6d7241ae6f5566, Cluster name: test-acc-tf-c-2936303797594730014
2025-05-28T01:41:39.5523585Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1104.75s)
```
#### FAIL 16 minutes
```
2025-05-28T09:05:03.5510816Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:05:03.5513183Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-28T09:06:19.2002968Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:07:19.1741990Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:07:19.1743480Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:07:19.173617044Z, ProjectID: 6836cb3ae6404f5026cefe5c, Cluster name: test-acc-tf-c-6225934015367723171
2025-05-28T09:18:53.5649962Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:18:53.5650721Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Error running apply: exit status 1
2025-05-28T09:18:53.5651242Z         
2025-05-28T09:18:53.5652675Z         Error: error updating advanced cluster (test-acc-tf-c-6225934015367723171): unexpected state 'PENDING', wanted target 'IDLE'. last error: %!s(<nil>)
2025-05-28T09:18:53.5653663Z         
2025-05-28T09:18:53.5654135Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5654914Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5655585Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5655940Z         
2025-05-28T09:23:05.7194698Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (1006.53s)
```
#### PASS 22 minutes
```
2025-05-28T12:49:45.5618311Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T12:49:45.5620542Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-28T12:51:02.8425370Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T12:52:07.8208768Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T12:52:07.8209979Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:52:07.820622161Z, ProjectID: 6836fff07e318b646f8b3248, Cluster name: test-acc-tf-c-7368167768285678794
2025-05-28T13:13:38.2694491Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1355.44s)
```
### 2025-05-29
#### PASS 26 minutes
```
2025-05-29T01:04:57.0231916Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T01:04:57.0233342Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-29T01:06:49.0019493Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T01:07:43.9961860Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T01:07:43.9964359Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:07:43.995916774Z, ProjectID: 6837ac5fa548243915a5d68e, Cluster name: test-acc-tf-c-1105323391083017626
2025-05-29T01:33:48.7238927Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1619.73s)
```
#### PASS 17 minutes
```
2025-05-29T15:22:09.6886671Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T15:22:09.6887993Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-29T15:23:22.3515836Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T15:24:32.3343203Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-29T15:24:32.3345007Z     pre_check.go:40: Time before creating cluster: 2025-05-29T15:24:32.333972964Z, ProjectID: 6838755844a1f312a06a156c, Cluster name: test-acc-tf-c-211906073306955393
2025-05-29T15:40:55.2244436Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1052.89s)
```
### 2025-05-30
#### FAIL an hour
```
2025-05-30T01:06:42.7179857Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:06:42.7182123Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-30T01:07:54.5540171Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:08:59.5285641Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:08:59.5287215Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:08:59.528333776Z, ProjectID: 6838fdf63a84470fe9d50aa7, Cluster name: test-acc-tf-c-7688489853782912900
2025-05-30T02:26:43.0757286Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T02:26:43.0758762Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-05-30T02:26:43.0760622Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-05-30T02:26:43.0762221Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-05-30T02:26:43.0763969Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-05-30T02:26:43.0765613Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-05-30T02:26:43.0766956Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-05-30T02:29:44.4259260Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4909.87s)
```
#### PASS 16 minutes
```
2025-05-30T07:59:58.0389653Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T07:59:58.0391397Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-30T08:01:07.2895174Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T08:02:17.2485200Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T08:02:17.2486646Z     pre_check.go:40: Time before creating cluster: 2025-05-30T08:02:17.24824331Z, ProjectID: 68395f539fbb580dba4e5fbe, Cluster name: test-acc-tf-c-8245469846486569087
2025-05-30T08:17:20.7046195Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (973.42s)
```
### 2025-05-31
#### PASS 21 minutes
```
2025-05-31T01:05:08.1220842Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-31T01:05:08.1222365Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-31T01:06:19.0480639Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-31T01:07:04.0614559Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-31T01:07:04.0616183Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:07:04.061207788Z, ProjectID: 683a4f386980316aa7db8156, Cluster name: test-acc-tf-c-610586423866799658
2025-05-31T01:28:17.9370792Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1318.89s)
```
### 2025-06-01
#### PASS 19 minutes
```
2025-06-01T01:08:01.0025562Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T01:08:01.0027317Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T01:09:44.9711433Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T01:10:19.9460984Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T01:10:19.9462757Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:10:19.945767764Z, ProjectID: 683ba1ab2ebc1806778a12f9, Cluster name: test-acc-tf-c-1786570381330285609
2025-06-01T01:29:31.0663701Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1186.11s)
```
#### PASS 19 minutes
```
2025-06-01T05:17:46.3843324Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T05:17:46.3846021Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T05:18:55.5930943Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T05:19:35.5962682Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T05:19:35.5966228Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:19:35.595943775Z, ProjectID: 683bdc027bf9cf70212c2dd5, Cluster name: test-acc-tf-c-6577068538502111512
2025-06-01T05:38:47.7794122Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1192.19s)
```
#### PASS 18 minutes
```
2025-06-01T09:27:08.5435030Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T09:27:08.5436718Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T09:28:31.6433017Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T09:28:41.6566432Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T09:28:41.6568494Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:28:41.65632226Z, ProjectID: 683c165fcc8f0935c7c230ba, Cluster name: test-acc-tf-c-921855312670716257
2025-06-01T09:47:05.0187258Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1113.38s)
```
#### PASS 17 minutes
```
2025-06-01T13:36:23.4545698Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T13:36:23.4547368Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T13:37:35.7403769Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T13:37:45.7364211Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T13:37:45.7365942Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:37:45.736134107Z, ProjectID: 683c50ce7bf9cf70212d305a, Cluster name: test-acc-tf-c-4462705739164063671
2025-06-01T13:54:55.1470658Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1039.41s)
```
#### PASS 20 minutes
```
2025-06-01T17:45:30.4384068Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T17:45:30.4385420Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T17:46:42.8841250Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T17:47:32.8896188Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T17:47:32.8897987Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:47:32.889375603Z, ProjectID: 683c8b37cc8f0935c7c2fe79, Cluster name: test-acc-tf-c-8704546248920656680
2025-06-01T18:06:47.6263967Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1204.75s)
```
#### FAIL 36 minutes
```
2025-06-01T21:52:45.7887058Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:52:45.7888402Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T21:54:01.2718661Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:55:26.2552102Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:55:26.2554374Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:55:26.254889011Z, ProjectID: 683cc572cc8f0935c7c36f43, Cluster name: test-acc-tf-c-4416757417454010473
2025-06-01T22:29:28.9422055Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T22:29:28.9423338Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-01T22:29:28.9425278Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-01T22:29:28.9427087Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-01T22:29:28.9428413Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-01T22:29:28.9429745Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-01T22:29:28.9431020Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-01T22:30:30.1543820Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2188.90s)
```
### 2025-06-02
#### PASS 21 minutes
```
2025-06-02T01:06:43.5903555Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T01:06:43.5905499Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-02T01:08:04.0118611Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T01:08:49.0119894Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T01:08:49.0121102Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:08:49.011727802Z, ProjectID: 683cf2bf7bf9cf70212e5bd0, Cluster name: test-acc-tf-c-4394325491002497895
2025-06-02T01:29:14.4933440Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1270.48s)
```
#### PASS 31 minutes
```
2025-06-02T02:05:45.6898197Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T02:05:45.6901041Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-02T02:07:09.8513497Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T02:07:24.8504645Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T02:07:24.8506175Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:07:24.850205001Z, ProjectID: 683cffdacc8f0935c7c41209, Cluster name: test-acc-tf-c-911002173415334582
2025-06-02T02:39:02.6144283Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1912.76s)
```
#### PASS 18 minutes
```
2025-06-02T06:18:08.5606916Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T06:18:08.5608400Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-02T06:19:34.2026863Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T06:20:04.2153328Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-02T06:20:04.2155120Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:20:04.215023967Z, ProjectID: 683d3ba17bf9cf70212f1acb, Cluster name: test-acc-tf-c-8032640682183209959
2025-06-02T06:38:03.9492025Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1109.75s)
```
### 2025-06-03
#### PASS 20 minutes
```
2025-06-03T01:07:19.3530683Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-03T01:07:19.3532338Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-03T01:08:35.0116944Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-03T01:08:55.0025746Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-03T01:08:55.0027325Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:08:55.002279143Z, ProjectID: 683e440a25aee225e55be4e5, Cluster name: test-acc-tf-c-7025448321559532215
2025-06-03T01:28:38.4777911Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1203.47s)
```
### 2025-06-04
#### PASS 21 minutes
```
2025-06-04T00:58:32.1200798Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-04T00:58:32.1202199Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-04T00:59:43.7193686Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-04T01:01:03.6965266Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-04T01:01:03.6969349Z     pre_check.go:40: Time before creating cluster: 2025-06-04T01:01:03.6962684Z, ProjectID: 683f9367040e94654178693a, Cluster name: test-acc-tf-c-1851773420271639728
2025-06-04T01:21:34.7866492Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1311.01s)
```
### 2025-06-05
#### FAIL 45 seconds
```
2025-06-05T00:35:24.5407598Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:35:24.5409217Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-05T00:35:42.8272498Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:36:27.8212063Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:36:27.8215660Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:27.820799921Z, ProjectID: 6840e4d5161ca93c1f052fd9, Cluster name: test-acc-tf-c-8751505965529070667
2025-06-05T00:36:28.3099300Z   
2025-06-05T00:36:28.3099847Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:36:28.3100370Z         
2025-06-05T00:36:28.3103180Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-06-05T00:36:28.3105146Z         
2025-06-05T00:36:28.3105692Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:36:28.3106355Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:36:28.3106955Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:36:28.3107269Z         
2025-06-05T00:36:28.3571328Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (45.54s)
```
### 2025-06-06
#### PASS 22 minutes
```
2025-06-06T01:02:38.4689681Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-06T01:02:38.4691937Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-06T01:06:43.1335616Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-06T01:07:38.1482239Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-06T01:07:38.1484232Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:07:38.147932575Z, ProjectID: 684236a6c64ff333daf69447, Cluster name: test-acc-tf-c-6765022995668019515
2025-06-06T01:29:30.9682399Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1367.84s)
```
### 2025-06-07
#### PASS 22 minutes
```
2025-06-07T00:58:10.2991135Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-07T00:58:10.2992779Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-07T00:59:22.5589049Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-07T01:00:12.5310397Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-07T01:00:12.5311529Z     pre_check.go:40: Time before creating cluster: 2025-06-07T01:00:12.530709858Z, ProjectID: 684387ce3cccfc2b22afac1a, Cluster name: test-acc-tf-c-4133136461300088124
2025-06-07T01:21:56.6036764Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1354.07s)
```
### 2025-06-08
#### PASS 20 minutes
```
2025-06-08T00:58:13.2607902Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-08T00:58:13.2609643Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-08T00:59:27.3292109Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-08T01:00:32.3153615Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-08T01:00:32.3155973Z     pre_check.go:40: Time before creating cluster: 2025-06-08T01:00:32.315068858Z, ProjectID: 6844da1369401b3bb3c36f1d, Cluster name: test-acc-tf-c-4679157016902070022
2025-06-08T01:19:34.1314042Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1206.82s)
```
### 2025-06-09
#### PASS 36 minutes
```
2025-06-09T00:59:37.0563390Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-09T00:59:37.0565268Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-09T01:00:51.7736736Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-09T01:01:51.7664439Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-09T01:01:51.7665625Z     pre_check.go:40: Time before creating cluster: 2025-06-09T01:01:51.766164936Z, ProjectID: 68462b4f0a8f6759322c3d53, Cluster name: test-acc-tf-c-8909043133891862265
2025-06-09T01:36:59.8418473Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (2168.07s)
```
### 2025-06-10
#### PASS 24 minutes
```
2025-06-10T01:06:17.6589404Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-10T01:06:17.6590534Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-10T01:07:33.5846244Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-10T01:08:33.5693166Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-10T01:08:33.5694354Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:08:33.56907434Z, ProjectID: 68477e739fcc7665ab83150e, Cluster name: test-acc-tf-c-5498432810807164335
2025-06-10T01:32:02.2053120Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1468.62s)
```
### 2025-06-11
#### PASS 22 minutes
```
2025-06-11T01:01:27.9018150Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T01:01:27.9020087Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-11T01:03:00.1264883Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T01:04:00.0924857Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T01:04:00.0926244Z     pre_check.go:40: Time before creating cluster: 2025-06-11T01:04:00.092189607Z, ProjectID: 6848cdce69b57d1e7dbb0145, Cluster name: test-acc-tf-c-4211668240490877151
2025-06-11T01:25:52.1155657Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1372.00s)
```
#### PASS 22 minutes
```
2025-06-11T08:05:23.2916400Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T08:05:23.2917797Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-11T08:06:40.6016305Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T08:07:45.5851518Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-11T08:07:45.5852989Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:07:45.58483316Z, ProjectID: 6849324249c05124969e7714, Cluster name: test-acc-tf-c-8217847841397584858
2025-06-11T08:29:30.7571047Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1370.16s)
```
### 2025-06-12
#### PASS 19 minutes
```
2025-06-12T01:01:00.9281519Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-12T01:01:00.9282557Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-12T01:02:47.3422187Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-12T01:02:57.3399714Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-12T01:02:57.3401035Z     pre_check.go:40: Time before creating cluster: 2025-06-12T01:02:57.339740148Z, ProjectID: 684a1f3e5c025329ee515cc4, Cluster name: test-acc-tf-c-7601872738395882051
2025-06-12T01:22:07.7696267Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1160.43s)
```
### 2025-06-13
#### PASS 23 minutes
```
2025-06-13T01:00:41.0092239Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-13T01:00:41.0093847Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-13T01:02:08.8099808Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-13T01:02:18.8090315Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-13T01:02:18.8091866Z     pre_check.go:40: Time before creating cluster: 2025-06-13T01:02:18.808583708Z, ProjectID: 684b70c7868b87498d554f12, Cluster name: test-acc-tf-c-6901169423776584930
2025-06-13T01:25:31.0524961Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1402.24s)
```
### 2025-06-14
#### PASS an hour
```
2025-06-14T01:28:56.9496070Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-14T01:28:56.9497369Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-14T01:32:10.2865152Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-14T01:32:20.2881878Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-14T01:32:20.2883522Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:32:20.287919066Z, ProjectID: 684cc2218f295e188b9c7f3c, Cluster name: test-acc-tf-c-6378614723539277399
2025-06-14T02:32:20.5299223Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (3610.24s)
```
### 2025-06-15
#### PASS 20 minutes
```
2025-06-15T01:02:43.3347379Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-15T01:02:43.3349355Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-15T01:04:06.0235824Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-15T01:05:06.0020377Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-15T01:05:06.0022365Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:05:06.001741051Z, ProjectID: 684e148c83e3896e131adde8, Cluster name: test-acc-tf-c-5384582220311607300
2025-06-15T01:24:34.3578144Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1228.34s)
```
### 2025-06-16
#### PASS 33 minutes
```
2025-06-16T01:03:12.0620512Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-16T01:03:12.0621936Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-16T01:04:53.8774362Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-16T01:06:08.8520864Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-16T01:06:08.8522203Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:06:08.85180496Z, ProjectID: 684f659f25b50457df2bf2db, Cluster name: test-acc-tf-c-5729238372703976793
2025-06-16T01:38:47.3973485Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (2033.55s)
```
### 2025-06-17
#### PASS 19 minutes
```
2025-06-17T01:01:44.2821407Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-17T01:01:44.2822690Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-17T01:03:31.0206048Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-17T01:03:41.0301138Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-17T01:03:41.0302961Z     pre_check.go:40: Time before creating cluster: 2025-06-17T01:03:41.029805052Z, ProjectID: 6850b6dc4283fe24ea0bbd55, Cluster name: test-acc-tf-c-5826225076089458478
2025-06-17T01:22:43.2723376Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1152.25s)
```
### 2025-06-18
#### FAIL 36 minutes
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-06-18T00:57:35.525000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='6 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6
```
2025-06-18T00:57:35.5252251Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T00:57:35.5253599Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-18T00:59:11.4676571Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:00:31.3768218Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:00:31.3771083Z     pre_check.go:40: Time before creating cluster: 2025-06-18T01:00:31.376573962Z, ProjectID: 68520863e8055c11bb5db967, Cluster name: test-acc-tf-c-7755882259580918934
2025-06-18T01:34:59.4394185Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:34:59.4395541Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-18T01:34:59.4397577Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-18T01:34:59.4398918Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-18T01:34:59.4400140Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-18T01:34:59.4401668Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-18T01:34:59.4402914Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-18T01:36:00.5329430Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2209.11s)
```
#### PASS 19 minutes
```
2025-06-18T07:58:19.8834482Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T07:58:19.8835719Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-18T07:59:36.5607852Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T07:59:46.5627820Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T07:59:46.5629660Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:59:46.562470228Z, ProjectID: 68526ac74a1a606c8b2e975d, Cluster name: test-acc-tf-c-451283724702151741
2025-06-18T08:19:29.9930400Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1193.43s)
```
### 2025-06-19
#### PASS 53 minutes
```
2025-06-19T01:07:33.1977392Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-19T01:07:33.1978989Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-19T01:09:39.9676287Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-19T01:10:44.9467514Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-19T01:10:44.9469514Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:10:44.946462936Z, ProjectID: 685359eee16f343ef1d9d8b8, Cluster name: test-acc-tf-c-116866463145454283
2025-06-19T02:03:09.9034720Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (3209.94s)
```
### 2025-06-20
#### PASS 22 minutes
```
2025-06-20T01:01:39.4599017Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-20T01:01:39.4600754Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-20T01:03:39.2490690Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-20T01:04:29.2469797Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-20T01:04:29.2471020Z     pre_check.go:40: Time before creating cluster: 2025-06-20T01:04:29.246723252Z, ProjectID: 6854ab4ecd32be2bdf8c09d6, Cluster name: test-acc-tf-c-8554206943105790764
2025-06-20T01:25:58.8161156Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1339.57s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T01:01:45.6165769Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-21T01:01:45.6167447Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-21T01:03:06.3787269Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-21T01:03:51.3717505Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-21T01:03:51.3719555Z     pre_check.go:40: Time before creating cluster: 2025-06-21T01:03:51.37145107Z, ProjectID: 6855fcbdfadf221ee30c7751, Cluster name: test-acc-tf-c-639499982093653482
2025-06-21T01:23:07.1664622Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1200.79s)
```
### 2025-06-22
#### PASS 33 minutes
```
2025-06-22T01:03:27.9551236Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-22T01:03:27.9552715Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-22T01:05:07.9337430Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-22T01:05:17.8945804Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-22T01:05:17.8947268Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:05:17.894304835Z, ProjectID: 68574f02af7a0954e84ae8c5, Cluster name: test-acc-tf-c-5988033837206767752
2025-06-22T01:38:31.1101449Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (2003.20s)
```
### 2025-06-23
#### PASS 18 minutes
```
2025-06-23T01:00:10.7004936Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-23T01:00:10.7005970Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-23T01:01:46.4914378Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-23T01:02:31.4806045Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-23T01:02:31.4807624Z     pre_check.go:40: Time before creating cluster: 2025-06-23T01:02:31.480327638Z, ProjectID: 6858a0539c500e6d1cbd6603, Cluster name: test-acc-tf-c-8243760785342475938
2025-06-23T01:20:34.0773398Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1127.59s)
```
### 2025-06-24
#### PASS 27 minutes
```
2025-06-24T00:59:09.2869661Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-24T00:59:09.2870938Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-24T01:00:52.0497849Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-24T01:00:57.0548678Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-24T01:00:57.0551284Z     pre_check.go:40: Time before creating cluster: 2025-06-24T01:00:57.054145514Z, ProjectID: 6859f15b2c29f60dd5410a19, Cluster name: test-acc-tf-c-1757073642542529318
2025-06-24T01:28:11.9077327Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1639.86s)
```
### 2025-06-25
#### PASS 19 minutes
```
2025-06-25T01:09:16.7603032Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-25T01:09:16.7604713Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-25T01:10:48.9049237Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-25T01:10:53.9019297Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-25T01:10:53.9020943Z     pre_check.go:40: Time before creating cluster: 2025-06-25T01:10:53.901678583Z, ProjectID: 685b42f4b37149039973d189, Cluster name: test-acc-tf-c-3801382592751377822
2025-06-25T01:30:38.8919621Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1189.99s)
```
### 2025-06-26
#### PASS 19 minutes
```
2025-06-26T00:58:55.2124853Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-26T00:58:55.2126369Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-26T01:00:07.3668298Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-26T01:00:22.3739260Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-26T01:00:22.3741169Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:00:22.373616261Z, ProjectID: 685c945d5c10882b9844065f, Cluster name: test-acc-tf-c-7841641016588542957
2025-06-26T01:19:08.1284085Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1140.76s)
```