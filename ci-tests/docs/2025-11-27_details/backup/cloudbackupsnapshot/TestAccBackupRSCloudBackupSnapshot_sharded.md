# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10)
Success rate: 68.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/6902b115e2dc7470847b3273/clusters/test-acc-tf-c-8396099065865547271/backup/snapshots/6902b4efe2dc7470847e1c92 | dev | timeout | 15384.02s
[2025-11-19 03:29](#error-2025-11-19t0329200000) |  | dev | timeout | 10810.08s
[2025-11-19 12:30](#error-2025-11-19t1230170000) |  | dev | timeout | 10806.07s
[2025-11-20 03:28](#error-2025-11-20t0328300000) |  | dev | timeout | 10810.08s
[2025-11-21 03:28](#error-2025-11-21t0328470000) |  | dev | timeout | 10805.10s
[2025-11-22 03:27](#error-2025-11-22t0327430000) |  | dev | timeout | 10815.08s
[2025-11-24 03:30](#error-2025-11-24t0330300000) |  | dev | timeout | 10806.03s
[2025-11-25 03:27](#error-2025-11-25t0327490000) |  | dev | timeout | 10810.08s
[2025-11-26 03:29](#error-2025-11-26t0329100000) |  | dev | timeout | 10811.01s
[2025-11-27 03:28](#error-2025-11-27t0328570000) |  | dev | timeout | 10815.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 30 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3497756Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-30T04:45:03.3502810Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-30T04:45:03.3509623Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-30T04:45:03.3511477Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:23.327576588Z, ProjectID: 6902b115e2dc7470847b3273, Cluster name: test-acc-tf-c-8396099065865547271
2025-10-30T04:45:03.3516925Z   diagnostic_summary=
2025-10-30T04:45:03.3521012Z   
2025-10-30T04:45:03.3555368Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-30T04:45:03.3556302Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-10-30T04:45:03.3556969Z         
2025-10-30T04:45:03.3558435Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-30T04:45:03.3560818Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-30T04:45:03.3565623Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115e2dc7470847b3273/clusters/test-acc-tf-c-8396099065865547271/backup/snapshots/6902b4efe2dc7470847e1c92 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 6902b4efe2dc7470847e1c92. Reason: Bad Request. Params: [6902b4efe2dc7470847e1c92], BadRequestDetail: 
2025-10-30T04:45:03.3568525Z         
2025-10-30T04:45:03.3569200Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-30T04:45:03.3570690Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-30T04:45:03.3571932Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-30T04:45:03.3572552Z         
2025-10-30T04:45:03.3587961Z    test_name=TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3612376Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-30T04:45:03.3613518Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3614351Z         
2025-10-30T04:45:03.3614820Z         Error: Error in delete
2025-10-30T04:45:03.3615286Z         
2025-10-30T04:45:03.3616093Z         cluster=test-acc-tf-c-8396099065865547271 didn't reach desired state:
2025-10-30T04:45:03.3617267Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3618352Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3619066Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (15384.17s)
```

- 2025-10-31 PASS 28 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 28 minutes
- 2025-11-04 PASS 28 minutes
- 2025-11-05
  - PASS 30 minutes
  - PASS 26 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 29 minutes
- 2025-11-08 PASS 50 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 25 minutes
- 2025-11-11 PASS 24 minutes
- 2025-11-12 PASS 28 minutes
- 2025-11-13 PASS 37 minutes
- 2025-11-14 PASS 29 minutes
- 2025-11-15 PASS 25 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 28 minutes
- 2025-11-18 PASS 26 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T03:29:20+00:00
```
2025-11-19T03:29:20.5416381Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T03:29:20.5418922Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T03:29:20.5422093Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T03:29:20.5422941Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:28:49.561886607Z, ProjectID: 691d0f34a9e010496acf8bbc, Cluster name: test-acc-tf-c-42195403246674813
2025-11-19T03:29:20.5502877Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T03:29:20.5503376Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-19T03:29:20.5503743Z         
2025-11-19T03:29:20.5504196Z         Error: Error in create
2025-11-19T03:29:20.5504461Z         
2025-11-19T03:29:20.5504900Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-19T03:29:20.5505614Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-19T03:29:20.5506256Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-19T03:29:20.5506596Z         
2025-11-19T03:29:20.5507290Z         cluster=test-acc-tf-c-42195403246674813 didn't reach desired state: IDLE,
2025-11-19T03:29:20.5507760Z         error: context deadline exceeded
2025-11-19T03:29:20.5508150Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10810.76s)
```

  - FAIL 3 hours

### Error 2025-11-19T12:30:17+00:00
```
2025-11-19T12:30:17.6019342Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T12:30:17.6022120Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T12:30:17.6024035Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T12:30:17.6025090Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:29:45.689113299Z, ProjectID: 691d8e014938dd1e70f5ef2b, Cluster name: test-acc-tf-c-8737173832467986198
2025-11-19T12:30:17.6105157Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-19T12:30:17.6105659Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-19T12:30:17.6106023Z         
2025-11-19T12:30:17.6106382Z         Error: Error in create
2025-11-19T12:30:17.6106633Z         
2025-11-19T12:30:17.6107001Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-19T12:30:17.6107693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-19T12:30:17.6108333Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-19T12:30:17.6108679Z         
2025-11-19T12:30:17.6109140Z         cluster=test-acc-tf-c-8737173832467986198 didn't reach desired state: IDLE,
2025-11-19T12:30:17.6109612Z         error: context deadline exceeded
2025-11-19T12:30:17.6109993Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10806.66s)
```

- 2025-11-20

### Error 2025-11-20T03:28:30+00:00
```
2025-11-20T03:28:30.4307490Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-20T03:28:30.4310051Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-20T03:28:30.4312330Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-20T03:28:30.4313217Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:27:58.957362958Z, ProjectID: 691e6081f41e983fa168be3e, Cluster name: test-acc-tf-c-2164373293295469176
2025-11-20T03:28:30.4369559Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-20T03:28:30.4370100Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-20T03:28:30.4370639Z         
2025-11-20T03:28:30.4370922Z         Error: Error in create
2025-11-20T03:28:30.4371167Z         
2025-11-20T03:28:30.4371549Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-20T03:28:30.4372255Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-20T03:28:30.4372916Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-20T03:28:30.4373242Z         
2025-11-20T03:28:30.4373713Z         cluster=test-acc-tf-c-2164373293295469176 didn't reach desired state: IDLE,
2025-11-20T03:28:30.4374190Z         error: context deadline exceeded
2025-11-20T03:28:30.4374575Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10810.76s)
```

- 2025-11-21

### Error 2025-11-21T03:28:47+00:00
```
2025-11-21T03:28:47.3792031Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-21T03:28:47.3794212Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-21T03:28:47.3795820Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-21T03:28:47.3796707Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:28:16.111493953Z, ProjectID: 691fb218a5aa29482fbdd9f3, Cluster name: test-acc-tf-c-5163116879113983422
2025-11-21T03:28:47.3881785Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-21T03:28:47.3882355Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-21T03:28:47.3882803Z         
2025-11-21T03:28:47.3883122Z         Error: Error in create
2025-11-21T03:28:47.3883427Z         
2025-11-21T03:28:47.3883936Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-21T03:28:47.3884651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-21T03:28:47.3885314Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-21T03:28:47.3885660Z         
2025-11-21T03:28:47.3886129Z         cluster=test-acc-tf-c-5163116879113983422 didn't reach desired state: IDLE,
2025-11-21T03:28:47.3886610Z         error: context deadline exceeded
2025-11-21T03:28:47.3887012Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10805.99s)
```

- 2025-11-22

### Error 2025-11-22T03:27:43+00:00
```
2025-11-22T03:27:43.2005857Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-22T03:27:43.2010587Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-22T03:27:43.2017647Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-22T03:27:43.2019256Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:10.510040687Z, ProjectID: 6921034d4aaa8d3932326aba, Cluster name: test-acc-tf-c-1030215562337366628
2025-11-22T03:27:43.2023279Z   diagnostic_summary=
2025-11-22T03:27:43.2033627Z    diagnostic_detail="" diagnostic_severity=ERROR tf_proto_version=6.10 tf_rpc=ApplyResourceChange
2025-11-22T03:27:43.2103705Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-22T03:27:43.2104781Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-22T03:27:43.2105448Z         
2025-11-22T03:27:43.2105914Z         Error: Error in create
2025-11-22T03:27:43.2106361Z         
2025-11-22T03:27:43.2107034Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-22T03:27:43.2108352Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-22T03:27:43.2109575Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-22T03:27:43.2110184Z         
2025-11-22T03:27:43.2111063Z         cluster=test-acc-tf-c-1030215562337366628 didn't reach desired state: IDLE,
2025-11-22T03:27:43.2111945Z         error: context deadline exceeded
2025-11-22T03:27:43.2112656Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10815.83s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T03:30:30+00:00
```
2025-11-24T03:30:30.5758612Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-24T03:30:30.5762953Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-24T03:30:30.5765907Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-24T03:30:30.5767535Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:29:59.026098301Z, ProjectID: 6923a6fd21519f56cb8536c5, Cluster name: test-acc-tf-c-1524438227309372875
2025-11-24T03:30:30.5851001Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-24T03:30:30.5851520Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-24T03:30:30.5851890Z         
2025-11-24T03:30:30.5852144Z         Error: Error in create
2025-11-24T03:30:30.5852397Z         
2025-11-24T03:30:30.5852819Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-24T03:30:30.5853540Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-24T03:30:30.5854178Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-24T03:30:30.5854509Z         
2025-11-24T03:30:30.5854952Z         cluster=test-acc-tf-c-1524438227309372875 didn't reach desired state: IDLE,
2025-11-24T03:30:30.5855418Z         error: context deadline exceeded
2025-11-24T03:30:30.5855796Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10806.28s)
```

- 2025-11-25

### Error 2025-11-25T03:27:49+00:00
```
2025-11-25T03:27:49.4426250Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-25T03:27:49.4431043Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-25T03:27:49.4433441Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-25T03:27:49.4434357Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:18.100297137Z, ProjectID: 6924f7d72b3b85618cf83ef5, Cluster name: test-acc-tf-c-7766217186795970625
2025-11-25T03:27:49.4482485Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-25T03:27:49.4483080Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-25T03:27:49.4483454Z         
2025-11-25T03:27:49.4483714Z         Error: Error in create
2025-11-25T03:27:49.4483975Z         
2025-11-25T03:27:49.4484337Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-25T03:27:49.4485039Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-25T03:27:49.4485688Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-25T03:27:49.4486025Z         
2025-11-25T03:27:49.4486490Z         cluster=test-acc-tf-c-7766217186795970625 didn't reach desired state: IDLE,
2025-11-25T03:27:49.4486963Z         error: context deadline exceeded
2025-11-25T03:27:49.4487349Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10810.77s)
```

- 2025-11-26

### Error 2025-11-26T03:29:10+00:00
```
2025-11-26T03:29:10.6326663Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-26T03:29:10.6328909Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-26T03:29:10.6332152Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-26T03:29:10.6332927Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:28:38.917814406Z, ProjectID: 692649aafa65867a021b013d, Cluster name: test-acc-tf-c-7266396164047267732
2025-11-26T03:29:10.6411018Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-26T03:29:10.6411527Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-26T03:29:10.6411877Z         
2025-11-26T03:29:10.6412139Z         Error: Error in create
2025-11-26T03:29:10.6412392Z         
2025-11-26T03:29:10.6412868Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-26T03:29:10.6413549Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-26T03:29:10.6414152Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-26T03:29:10.6414482Z         
2025-11-26T03:29:10.6414918Z         cluster=test-acc-tf-c-7266396164047267732 didn't reach desired state: IDLE,
2025-11-26T03:29:10.6415375Z         error: context deadline exceeded
2025-11-26T03:29:10.6415757Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10811.08s)
```

- 2025-11-27

### Error 2025-11-27T03:28:57+00:00
GoTestErrorClassification(error_class='timeout',author='human',run_id='2025-11-27T03:28:57.122000+00:00-TestAccBackupRSCloudBackupSnapshot_sharded',confidence=1.0,ts_when='an hour ago')

```
2025-11-27T03:28:57.1220093Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-27T03:28:57.1223113Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-27T03:28:57.1227194Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-27T03:28:57.1228045Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:28:25.832066421Z, ProjectID: 69279b183c4d827e6c41e1ce, Cluster name: test-acc-tf-c-9160657228694304007
2025-11-27T03:28:57.1230876Z   diagnostic_summary=
2025-11-27T03:28:57.1236669Z   
2025-11-27T03:28:57.1278194Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-11-27T03:28:57.1278721Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-11-27T03:28:57.1279092Z         
2025-11-27T03:28:57.1279362Z         Error: Error in create
2025-11-27T03:28:57.1279617Z         
2025-11-27T03:28:57.1279987Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-11-27T03:28:57.1280679Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-11-27T03:28:57.1281341Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-11-27T03:28:57.1281677Z         
2025-11-27T03:28:57.1282157Z         cluster=test-acc-tf-c-9160657228694304007 didn't reach desired state: IDLE,
2025-11-27T03:28:57.1282641Z         error: context deadline exceeded
2025-11-27T03:28:57.1283048Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10815.77s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 26 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 25 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 25 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 28 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 28 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
