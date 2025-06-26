# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 11 minutes
```
2025-05-28T02:03:35.3123750Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T02:03:35.3276234Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T02:03:35.3313029Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T02:03:35.3313883Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:16:28.724734405Z, ProjectID: 68365ae71e6d7241ae6f54bf, Cluster name: test-acc-tf-c-7791437772763030530
2025-05-28T02:03:35.3394752Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (668.34s)
```
#### FAIL 3 hours
```
2025-05-28T12:04:46.9747605Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9828856Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9858907Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9859975Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:03:41.03477567Z, ProjectID: 6836cb2fd000797dbe91f1bb, Cluster name: test-acc-tf-c-4530494852259265455
2025-05-28T12:04:46.9874774Z   
2025-05-28T12:04:47.0096295Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:47.0096893Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:04:47.0097328Z         
2025-05-28T12:04:47.0097571Z         Error: Error in create
2025-05-28T12:04:47.0097805Z         
2025-05-28T12:04:47.0098124Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0098766Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0099352Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0099650Z         
2025-05-28T12:04:47.0100094Z         cluster=test-acc-tf-c-4530494852259265455 didn't reach desired state: IDLE,
2025-05-28T12:04:47.0100697Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-28T12:04:47.0101115Z         'CREATING', timeout: 3h0m0s)
2025-05-28T12:04:47.0101477Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (10810.11s)
```
#### PASS 13 minutes
```
2025-05-28T13:47:11.9940750Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T13:47:12.0039280Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T13:47:12.0067158Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T13:47:12.0067998Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:50:06.825404804Z, ProjectID: 6836ffe4541cf637391bf313, Cluster name: test-acc-tf-c-7477167709495614158
2025-05-28T13:47:12.0153604Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (812.54s)
```
### 2025-05-29
#### PASS 23 minutes
```
2025-05-29T02:20:21.7219775Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-29T02:20:21.7299390Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-29T02:20:21.7344358Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-29T02:20:21.7345746Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:06:00.14542099Z, ProjectID: 6837ac59a548243915a5d264, Cluster name: test-acc-tf-c-6635083514332870758
2025-05-29T02:20:21.7431288Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1386.15s)
```
### 2025-05-30
#### PASS 15 minutes
```
2025-05-30T03:30:24.2256604Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T03:30:24.2341461Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T03:30:24.2370038Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T03:30:24.2370883Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:02:31.839519879Z, ProjectID: 6838fdf4633e350548a59122, Cluster name: test-acc-tf-c-1905021806741984201
2025-05-30T03:30:24.2439488Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (927.14s)
```
#### PASS 18 minutes
```
2025-05-30T08:55:11.7468295Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T08:55:11.7597249Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T08:55:11.7632270Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-30T08:55:11.7633277Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:58:57.695586736Z, ProjectID: 68395f4d9fbb580dba4e5e37, Cluster name: test-acc-tf-c-2931010736518730606
2025-05-30T08:55:11.7728412Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1103.80s)
```
### 2025-05-31
#### PASS 14 minutes
```
2025-05-31T04:18:53.2161618Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2271330Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2299441Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2300281Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:03:23.793113125Z, ProjectID: 683a4f366980316aa7db7fd8, Cluster name: test-acc-tf-c-2131968583498875947
2025-05-31T04:18:53.2387725Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (850.70s)
```
### 2025-06-01
#### PASS 10 minutes
```
2025-06-01T04:20:15.0478759Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0563541Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0592363Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0593415Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:05:55.04831122Z, ProjectID: 683ba1a62ebc1806778a0ee5, Cluster name: test-acc-tf-c-1829814270457230276
2025-06-01T04:20:15.0667407Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (656.13s)
```
#### PASS 12 minutes
```
2025-06-01T08:29:24.1276206Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1356711Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1387399Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1388452Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:14:42.445185264Z, ProjectID: 683bdbfacc8f0935c7c1973b, Cluster name: test-acc-tf-c-5193476411006340005
2025-06-01T08:29:24.1476406Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (744.07s)
```
#### PASS 11 minutes
```
2025-06-01T12:36:46.3832114Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3922014Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3953639Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3954618Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:24:01.890034874Z, ProjectID: 683c16567bf9cf70212cc14a, Cluster name: test-acc-tf-c-5843421020369241498
2025-06-01T12:36:46.4039803Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (713.98s)
```
#### PASS 11 minutes
```
2025-06-01T16:46:33.8266874Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8349655Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8380093Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8381082Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:32:34.631580583Z, ProjectID: 683c50c3cc8f0935c7c28ec4, Cluster name: test-acc-tf-c-8163855524041438606
2025-06-01T16:46:33.8467917Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (712.43s)
```
#### PASS 12 minutes
```
2025-06-01T20:56:30.1243247Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1394226Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1428931Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1429826Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:43:10.495744587Z, ProjectID: 683c8b367bf9cf70212d9ae0, Cluster name: test-acc-tf-c-1570100308235017750
2025-06-01T20:56:30.1522200Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (776.93s)
```
### 2025-06-02
#### PASS 11 minutes
```
2025-06-02T01:07:47.7436205Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7516912Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7542305Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7543873Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:50:58.815289561Z, ProjectID: 683cc56dcc8f0935c7c36c86, Cluster name: test-acc-tf-c-603449422510642614
2025-06-02T01:07:47.7678873Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (671.27s)
```
#### PASS 11 minutes
```
2025-06-02T04:19:30.0923566Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1005863Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1038477Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1039455Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:05:13.494341126Z, ProjectID: 683cf2b9cc8f0935c7c3c4e8, Cluster name: test-acc-tf-c-2401849045205588368
2025-06-02T04:19:30.1122315Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (699.37s)
```
#### PASS 13 minutes
```
2025-06-02T05:16:34.1881061Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.1965804Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.1997158Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.1998143Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:03:30.192237622Z, ProjectID: 683cffd17bf9cf70212e98ab, Cluster name: test-acc-tf-c-5418035262673162512
2025-06-02T05:16:34.2085449Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (807.60s)
```
#### PASS 13 minutes
```
2025-06-02T09:30:51.2462964Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2622535Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2673462Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2675017Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:15:05.836404479Z, ProjectID: 683d3b9a7bf9cf70212f1628, Cluster name: test-acc-tf-c-6713685973737917976
2025-06-02T09:30:51.2772827Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (806.20s)
```
### 2025-06-03
#### PASS 15 minutes
```
2025-06-03T02:00:08.0908096Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-03T02:00:08.0992474Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-03T02:00:08.1039122Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-03T02:00:08.1039963Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:06:13.749271423Z, ProjectID: 683e440625aee225e55be318, Cluster name: test-acc-tf-c-7213180080720079345
2025-06-03T02:00:08.1109257Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (913.09s)
```
### 2025-06-04
#### PASS 15 minutes
```
2025-06-04T01:50:55.4260085Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-04T01:50:55.4346993Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-04T01:50:55.4375146Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-04T01:50:55.4375999Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:55:49.724208894Z, ProjectID: 683f93624fa12629039cd75b, Cluster name: test-acc-tf-c-4297458451812263448
2025-06-04T01:50:55.4460567Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (903.04s)
```
### 2025-06-05
#### FAIL 23 seconds
```
2025-06-05T00:35:38.5802356Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.5938109Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6678988Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6679622Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:46.009851098Z, ProjectID: 6840e4c6161ca93c1f0527b5, Cluster name: test-acc-tf-c-2876772573792982698
2025-06-05T00:35:38.6682920Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest990485244 test_name=TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6683303Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6683400Z         
2025-06-05T00:35:38.6683551Z         Error: Error in create
2025-06-05T00:35:38.6683638Z         
2025-06-05T00:35:38.6683864Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6684309Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6684580Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6684673Z         
2025-06-05T00:35:38.6684986Z         cluster name: test-acc-tf-c-2876772573792982698, API error details:
2025-06-05T00:35:38.6685393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6161ca93c1f0527b5/clusters
2025-06-05T00:35:38.6685748Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6686039Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6686174Z         BadRequestDetail: 
2025-06-05T00:35:38.6686487Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (23.60s)
```
### 2025-06-06
#### PASS 10 minutes
```
2025-06-06T05:30:18.8670728Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8811339Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8861252Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8862786Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:02:16.37563107Z, ProjectID: 6842369bc64ff333daf68e77, Cluster name: test-acc-tf-c-8743563073072622267
2025-06-06T05:30:18.8976001Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (652.15s)
```
### 2025-06-07
#### PASS 11 minutes
```
2025-06-07T01:49:34.4994079Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-07T01:49:34.5080164Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-07T01:49:34.5108545Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-07T01:49:34.5109390Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:56:24.007532348Z, ProjectID: 684387cbbf49d05598c15045, Cluster name: test-acc-tf-c-3327263599518363369
2025-06-07T01:49:34.5183607Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (700.62s)
```
### 2025-06-08
#### PASS 14 minutes
```
2025-06-08T01:48:59.8773421Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-08T01:48:59.8892456Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-08T01:48:59.8982611Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-08T01:48:59.8983426Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:58:29.633254565Z, ProjectID: 6844da0f69401b3bb3c36b6c, Cluster name: test-acc-tf-c-3772464227613557805
2025-06-08T01:48:59.9020876Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (898.53s)
```
### 2025-06-09
#### PASS 14 minutes
```
2025-06-09T04:06:35.6293616Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-09T04:06:35.6375420Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-09T04:06:35.6403155Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-09T04:06:35.6404194Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:57:28.967019033Z, ProjectID: 68462b4f0a8f6759322c3d5d, Cluster name: test-acc-tf-c-5763241085040428129
2025-06-09T04:06:35.6485655Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (841.49s)
```
### 2025-06-10
#### PASS 18 minutes
```
2025-06-10T02:43:46.9749119Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-10T02:43:46.9831248Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-10T02:43:46.9858603Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-10T02:43:46.9859540Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:17:37.632575811Z, ProjectID: 68477e70a888514df22a78f2, Cluster name: test-acc-tf-c-8020273786100942909
2025-06-10T02:43:46.9930018Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1096.95s)
```
### 2025-06-11
#### PASS 13 minutes
```
2025-06-11T01:51:36.5452873Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T01:51:36.5534360Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T01:51:36.5563371Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T01:51:36.5564242Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:57:00.724245715Z, ProjectID: 6848cdca69b57d1e7dbafe83, Cluster name: test-acc-tf-c-4828789649202681006
2025-06-11T01:51:36.5652499Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (837.48s)
```
#### PASS 15 minutes
```
2025-06-11T09:05:12.3134528Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T09:05:12.3267164Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T09:05:12.3315644Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-11T09:05:12.3317140Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:01:49.733625295Z, ProjectID: 6849323249c05124969e6d8b, Cluster name: test-acc-tf-c-1893003258588237682
2025-06-11T09:05:12.3472094Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (924.76s)
```
### 2025-06-12
#### PASS 12 minutes
```
2025-06-12T01:54:44.2835065Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-12T01:54:44.2918470Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-12T01:54:44.2945750Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-12T01:54:44.2946572Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:58:45.351327777Z, ProjectID: 684a1f395c025329ee515973, Cluster name: test-acc-tf-c-3843922765138404763
2025-06-12T01:54:44.3025377Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (752.35s)
```
### 2025-06-13
#### PASS 14 minutes
```
2025-06-13T01:55:30.6408504Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-13T01:55:30.6488398Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-13T01:55:30.6516202Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-13T01:55:30.6517040Z     pre_check.go:40: Time before creating cluster: 2025-06-13T00:59:39.185148596Z, ProjectID: 684b70c4a4aae01f9b73c7ae, Cluster name: test-acc-tf-c-2051856657988693827
2025-06-13T01:55:30.6610874Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (883.16s)
```
### 2025-06-14
#### PASS 12 minutes
```
2025-06-14T02:34:39.9560981Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-14T02:34:39.9652167Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-14T02:34:39.9683773Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-14T02:34:39.9684980Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:01:02.022659024Z, ProjectID: 684cc22025b50457df29a785, Cluster name: test-acc-tf-c-3534364489520840262
2025-06-14T02:34:39.9760717Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (751.96s)
```
### 2025-06-15
#### PASS 14 minutes
```
2025-06-15T01:56:51.5852221Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-15T01:56:51.5979413Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-15T01:56:51.6024458Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-15T01:56:51.6025874Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:01:45.366802817Z, ProjectID: 684e148a83e3896e131adc0e, Cluster name: test-acc-tf-c-2411393420543910424
2025-06-15T01:56:51.6183929Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (840.90s)
```
### 2025-06-16
#### PASS 17 minutes
```
2025-06-16T02:15:00.6496077Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-16T02:15:00.6579852Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-16T02:15:00.6607099Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-16T02:15:00.6607926Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:05:29.786396589Z, ProjectID: 684f659a25b50457df2befcf, Cluster name: test-acc-tf-c-6917311796826804780
2025-06-16T02:15:00.6686960Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1048.12s)
```
### 2025-06-17
#### PASS 12 minutes
```
2025-06-17T01:54:49.2983726Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-17T01:54:49.3075357Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-17T01:54:49.3106331Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-17T01:54:49.3107203Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:56:45.273201237Z, ProjectID: 6850b6dd4283fe24ea0bbe1b, Cluster name: test-acc-tf-c-6002356500867331043
2025-06-17T01:54:49.3192430Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (762.02s)
```
### 2025-06-18
#### PASS 13 minutes
```
2025-06-18T01:55:10.7176655Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T01:55:10.7254767Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T01:55:10.7283352Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T01:55:10.7284331Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:59:02.349644372Z, ProjectID: 6852085ae8055c11bb5db4ef, Cluster name: test-acc-tf-c-3542086932144981641
2025-06-18T01:55:10.7370652Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (822.25s)
```
#### PASS 13 minutes
```
2025-06-18T08:48:56.0085976Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T08:48:56.0184228Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T08:48:56.0217882Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-18T08:48:56.0218764Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:56:28.488339453Z, ProjectID: 68526ac54a1a606c8b2e9623, Cluster name: test-acc-tf-c-4890970314368128249
2025-06-18T08:48:56.0308788Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (836.48s)
```
### 2025-06-19
#### PASS 41 minutes
```
2025-06-19T02:33:55.9761239Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-19T02:33:55.9853365Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-19T02:33:55.9890945Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-19T02:33:55.9891822Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:05:32.337474195Z, ProjectID: 685359edcd32be2bdf88c5bc, Cluster name: test-acc-tf-c-4101901141576583177
2025-06-19T02:33:55.9968662Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (2516.13s)
```
### 2025-06-20
#### PASS 11 minutes
```
2025-06-20T01:46:12.3294226Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-20T01:46:12.3371713Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-20T01:46:12.3399777Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-20T01:46:12.3400613Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:58:36.528006167Z, ProjectID: 6854ab49e16f343ef1dd2a6b, Cluster name: test-acc-tf-c-103107224543748276
2025-06-20T01:46:12.3475341Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (671.23s)
```
### 2025-06-21
#### PASS 12 minutes
```
2025-06-21T01:47:13.0036542Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-21T01:47:13.0114690Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-21T01:47:13.0141770Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-21T01:47:13.0142604Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:58:14.68975867Z, ProjectID: 6855fcb8fadf221ee30c72ad, Cluster name: test-acc-tf-c-1565372867936163519
2025-06-21T01:47:13.0228404Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (743.32s)
```
### 2025-06-22
#### PASS 14 minutes
```
2025-06-22T03:04:12.6062704Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-22T03:04:12.6141421Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-22T03:04:12.6170149Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-22T03:04:12.6171693Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:02:03.933407356Z, ProjectID: 68574ef9ab82446d9bfb0cf9, Cluster name: test-acc-tf-c-6893931293595411899
2025-06-22T03:04:12.6348078Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (862.81s)
```
### 2025-06-23
#### PASS 12 minutes
```
2025-06-23T01:49:14.0834050Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-23T01:49:14.0977630Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-23T01:49:14.1028043Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-23T01:49:14.1029502Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:59:06.72803259Z, ProjectID: 6858a0529c500e6d1cbd64fc, Cluster name: test-acc-tf-c-891311320282684988
2025-06-23T01:49:14.1112442Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (723.89s)
```
### 2025-06-24
#### PASS 23 minutes
```
2025-06-24T02:00:03.6417798Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-24T02:00:03.6498280Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-24T02:00:03.6526041Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-24T02:00:03.6526858Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:57:32.809628284Z, ProjectID: 6859f15922100658cf266c43, Cluster name: test-acc-tf-c-7395114772238148645
2025-06-24T02:00:03.6618511Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1426.55s)
```
### 2025-06-25
#### PASS 11 minutes
```
2025-06-25T01:46:02.1927904Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-25T01:46:02.2062913Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-25T01:46:02.2111484Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-25T01:46:02.2112978Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:56:36.215468865Z, ProjectID: 685b42ecbf2fcb3b443f80b6, Cluster name: test-acc-tf-c-3213889955603016572
2025-06-25T01:46:02.2197630Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (669.84s)
```
### 2025-06-26
#### PASS 16 minutes
```
2025-06-26T01:58:04.7948792Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T01:58:04.8039423Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T01:58:04.8118444Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T01:58:04.8119253Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:03:19.568835321Z, ProjectID: 685c94581b4e2c6e5fe4402e, Cluster name: test-acc-tf-c-1299202303375069182
2025-06-26T01:58:04.8159017Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (1007.29s)
```
#### PASS 10 minutes
```
2025-06-26T05:26:49.4742722Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T05:26:49.4879478Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T05:26:49.4928129Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-26T05:26:49.4929034Z     pre_check.go:40: Time before creating cluster: 2025-06-26T04:40:04.206756016Z, ProjectID: 685cc91127410c4e07cdf2d4, Cluster name: test-acc-tf-c-7942374979773397909
2025-06-26T05:26:49.4997679Z --- PASS: TestMigAdvancedCluster_replicaSetAWSProvider (626.86s)
```