# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10)
Success rate: 68.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11760.02s
[2025-11-19 03:29](#error-2025-11-19t0329200000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/691d0f34a9e010496acf8bbc/clusters/test-acc-tf-c-6807075951510386457/backup/snapshots/691d126a7ae66f6c53f13928 | dev | timeout | 4541.03s
[2025-11-19 12:30](#error-2025-11-19t1230170000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/691d8e014938dd1e70f5ef2b/clusters/test-acc-tf-c-8476896823958358959/backup/snapshots/691d90e75ab64e7c5567a128 | dev | timeout | 4460.06s
[2025-11-20 03:28](#error-2025-11-20t0328300000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/691e6081f41e983fa168be3e/clusters/test-acc-tf-c-3599031217492241275/backup/snapshots/691e63e0a0b6e4670df581f8 | dev | timeout | 4584.09s
[2025-11-21 03:28](#error-2025-11-21t0328470000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/691fb218a5aa29482fbdd9f3/clusters/test-acc-tf-c-992765211402376596/backup/snapshots/691fb51b238ce57ddce5aa4b | dev | timeout | 4490.08s
[2025-11-22 03:27](#error-2025-11-22t0327430000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/6921034d4aaa8d3932326aba/clusters/test-acc-tf-c-9157155864353839262/backup/snapshots/69210666aed3a5692ebcb468 | dev | timeout | 4515.09s
[2025-11-24 03:30](#error-2025-11-24t0330300000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/6923a6fd21519f56cb8536c5/clusters/test-acc-tf-c-2330302355948248022/backup/snapshots/6923a9e421519f56cb872aaf | dev | timeout | 4459.10s
[2025-11-25 03:27](#error-2025-11-25t0327490000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/6924f7d72b3b85618cf83ef5/clusters/test-acc-tf-c-3986790657151345691/backup/snapshots/6924fb92def656331da30dce | dev | timeout | 4678.02s
[2025-11-26 03:29](#error-2025-11-26t0329100000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/692649aafa65867a021b013d/clusters/test-acc-tf-c-3987236707435407257/backup/snapshots/69264ca5fa65867a021ca793 | dev | timeout | 4514.05s
[2025-11-27 03:28](#error-2025-11-27t0328570000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/69279b183c4d827e6c41e1ce/clusters/test-acc-tf-c-4764349505841240907/backup/snapshots/69279ec7b358b3221e902c96 | dev | flaky_500 | 4665.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3495096Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3496221Z     resource_test.go:25: Creating execution project: test-acc-tf-p-3820546354577568335
2025-10-30T04:45:03.3501194Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3503539Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3505164Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:13.320367648Z, ProjectID: 6902b115e2dc7470847b3273, Cluster name: test-acc-tf-c-2551835599604193706
2025-10-30T04:45:03.3588667Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3589883Z     resource_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3591019Z         
2025-10-30T04:45:03.3591607Z         Error: Error in delete
2025-10-30T04:45:03.3592060Z         
2025-10-30T04:45:03.3592876Z         cluster=test-acc-tf-c-2551835599604193706 didn't reach desired state:
2025-10-30T04:45:03.3594058Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3594944Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3595636Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (11760.21s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 20 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 23 minutes
- 2025-11-13 PASS 32 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 23 minutes
- 2025-11-18 PASS 20 minutes
- 2025-11-19
  - FAIL an hour

### Error 2025-11-19T03:29:20+00:00
```
2025-11-19T03:29:20.5415418Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T03:29:20.5419315Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T03:29:20.5420525Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T03:29:20.5421390Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:28:44.561736254Z, ProjectID: 691d0f34a9e010496acf8bbc, Cluster name: test-acc-tf-c-6807075951510386457
2025-11-19T03:29:20.5472244Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T03:29:20.5472759Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-19T03:29:20.5473136Z         
2025-11-19T03:29:20.5473903Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-19T03:29:20.5475078Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-19T03:29:20.5477821Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691d0f34a9e010496acf8bbc/clusters/test-acc-tf-c-6807075951510386457/backup/snapshots/691d126a7ae66f6c53f13928 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 691d126a7ae66f6c53f13928. Reason: Bad Request. Params: [691d126a7ae66f6c53f13928], BadRequestDetail: 
2025-11-19T03:29:20.5479302Z         
2025-11-19T03:29:20.5479662Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-19T03:29:20.5480344Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-19T03:29:20.5480978Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-19T03:29:20.5481428Z         
2025-11-19T03:29:20.5481755Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4541.28s)
```

  - FAIL an hour

### Error 2025-11-19T12:30:17+00:00
```
2025-11-19T12:30:17.6018472Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T12:30:17.6023150Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T12:30:17.6027995Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T12:30:17.6029292Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:29:55.70073261Z, ProjectID: 691d8e014938dd1e70f5ef2b, Cluster name: test-acc-tf-c-8476896823958358959
2025-11-19T12:30:17.6030942Z   diagnostic_summary=
2025-11-19T12:30:17.6036756Z    tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=9f0a67da-c285-8b81-6c63-3b5c23631bba tf_resource_type=mongodbatlas_cloud_backup_snapshot
2025-11-19T12:30:17.6055629Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-19T12:30:17.6056130Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-19T12:30:17.6056497Z         
2025-11-19T12:30:17.6057261Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-19T12:30:17.6058548Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-19T12:30:17.6061531Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691d8e014938dd1e70f5ef2b/clusters/test-acc-tf-c-8476896823958358959/backup/snapshots/691d90e75ab64e7c5567a128 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 691d90e75ab64e7c5567a128. Reason: Bad Request. Params: [691d90e75ab64e7c5567a128], BadRequestDetail: 
2025-11-19T12:30:17.6063022Z         
2025-11-19T12:30:17.6063383Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-19T12:30:17.6064067Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-19T12:30:17.6064697Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-19T12:30:17.6065032Z         
2025-11-19T12:30:17.6074294Z    test_step_number=1 test_name=TestMigBackupRSCloudBackupSnapshot_basic
2025-11-19T12:30:17.6084275Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4460.56s)
```

- 2025-11-20

### Error 2025-11-20T03:28:30+00:00
```
2025-11-20T03:28:30.4305434Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-20T03:28:30.4306587Z     resource_test.go:25: Creating execution project: test-acc-tf-p-6428955669484726950
2025-11-20T03:28:30.4309203Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-20T03:28:30.4313897Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-20T03:28:30.4314780Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:28:03.958390926Z, ProjectID: 691e6081f41e983fa168be3e, Cluster name: test-acc-tf-c-3599031217492241275
2025-11-20T03:28:30.4317724Z   diagnostic_summary=
2025-11-20T03:28:30.4325735Z   
2025-11-20T03:28:30.4347940Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-20T03:28:30.4348737Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-20T03:28:30.4349432Z         
2025-11-20T03:28:30.4351169Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-20T03:28:30.4352653Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-20T03:28:30.4355790Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e6081f41e983fa168be3e/clusters/test-acc-tf-c-3599031217492241275/backup/snapshots/691e63e0a0b6e4670df581f8 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 691e63e0a0b6e4670df581f8. Reason: Bad Request. Params: [691e63e0a0b6e4670df581f8], BadRequestDetail: 
2025-11-20T03:28:30.4357351Z         
2025-11-20T03:28:30.4357735Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-20T03:28:30.4358486Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-20T03:28:30.4359278Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-20T03:28:30.4359610Z         
2025-11-20T03:28:30.4359913Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4584.92s)
```

- 2025-11-21

### Error 2025-11-21T03:28:47+00:00
```
2025-11-21T03:28:47.3791263Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-21T03:28:47.3795072Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-21T03:28:47.3799286Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-21T03:28:47.3800408Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:28:26.111951643Z, ProjectID: 691fb218a5aa29482fbdd9f3, Cluster name: test-acc-tf-c-992765211402376596
2025-11-21T03:28:47.3801889Z   diagnostic_summary=
2025-11-21T03:28:47.3807929Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_cloud_backup_snapshot tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_req_id=3b66fe3a-5997-6240-02cc-04f4128b2a2e
2025-11-21T03:28:47.3830642Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-21T03:28:47.3831259Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-21T03:28:47.3831776Z         
2025-11-21T03:28:47.3832560Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-21T03:28:47.3833756Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-21T03:28:47.3836318Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691fb218a5aa29482fbdd9f3/clusters/test-acc-tf-c-992765211402376596/backup/snapshots/691fb51b238ce57ddce5aa4b DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 691fb51b238ce57ddce5aa4b. Reason: Bad Request. Params: [691fb51b238ce57ddce5aa4b], BadRequestDetail: 
2025-11-21T03:28:47.3837820Z         
2025-11-21T03:28:47.3838193Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-21T03:28:47.3839080Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-21T03:28:47.3839750Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-21T03:28:47.3840091Z         
2025-11-21T03:28:47.3860158Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4490.80s)
```

- 2025-11-22

### Error 2025-11-22T03:27:43+00:00
```
2025-11-22T03:27:43.2003066Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-22T03:27:43.2004351Z     resource_test.go:25: Creating execution project: test-acc-tf-p-6594041967874526469
2025-11-22T03:27:43.2008971Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-22T03:27:43.2011375Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-22T03:27:43.2013013Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:00.504377984Z, ProjectID: 6921034d4aaa8d3932326aba, Cluster name: test-acc-tf-c-9157155864353839262
2025-11-22T03:27:43.2068836Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-22T03:27:43.2069795Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-22T03:27:43.2070469Z         
2025-11-22T03:27:43.2071935Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-22T03:27:43.2074363Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-22T03:27:43.2079450Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6921034d4aaa8d3932326aba/clusters/test-acc-tf-c-9157155864353839262/backup/snapshots/69210666aed3a5692ebcb468 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 69210666aed3a5692ebcb468. Reason: Bad Request. Params: [69210666aed3a5692ebcb468], BadRequestDetail: 
2025-11-22T03:27:43.2082320Z         
2025-11-22T03:27:43.2082998Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-22T03:27:43.2084461Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-22T03:27:43.2085655Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-22T03:27:43.2086221Z         
2025-11-22T03:27:43.2086729Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4515.86s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T03:30:30+00:00
```
2025-11-24T03:30:30.5757039Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-24T03:30:30.5764508Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-24T03:30:30.5770403Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-24T03:30:30.5771512Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:30:09.031584256Z, ProjectID: 6923a6fd21519f56cb8536c5, Cluster name: test-acc-tf-c-2330302355948248022
2025-11-24T03:30:30.5772945Z   diagnostic_summary=
2025-11-24T03:30:30.5778572Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_cloud_backup_snapshot tf_req_id=b229b94a-04f4-c544-a00a-0db501505b94 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2025-11-24T03:30:30.5817930Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-24T03:30:30.5818727Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-24T03:30:30.5819391Z         
2025-11-24T03:30:30.5820937Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-24T03:30:30.5822158Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-24T03:30:30.5824761Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6923a6fd21519f56cb8536c5/clusters/test-acc-tf-c-2330302355948248022/backup/snapshots/6923a9e421519f56cb872aaf DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 6923a9e421519f56cb872aaf. Reason: Bad Request. Params: [6923a9e421519f56cb872aaf], BadRequestDetail: 
2025-11-24T03:30:30.5826231Z         
2025-11-24T03:30:30.5826600Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-24T03:30:30.5827292Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-24T03:30:30.5827935Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-24T03:30:30.5828263Z         
2025-11-24T03:30:30.5828991Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4459.99s)
```

- 2025-11-25

### Error 2025-11-25T03:27:49+00:00
```
2025-11-25T03:27:49.4423552Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-25T03:27:49.4424626Z     resource_test.go:25: Creating execution project: test-acc-tf-p-8387417396262914316
2025-11-25T03:27:49.4429530Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-25T03:27:49.4435098Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-25T03:27:49.4436003Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:23.10223732Z, ProjectID: 6924f7d72b3b85618cf83ef5, Cluster name: test-acc-tf-c-3986790657151345691
2025-11-25T03:27:49.4438773Z   diagnostic_summary=
2025-11-25T03:27:49.4444527Z    diagnostic_detail="" diagnostic_severity=ERROR
2025-11-25T03:27:49.4463021Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-25T03:27:49.4463537Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-25T03:27:49.4463904Z         
2025-11-25T03:27:49.4464694Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-25T03:27:49.4465891Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-25T03:27:49.4468581Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6924f7d72b3b85618cf83ef5/clusters/test-acc-tf-c-3986790657151345691/backup/snapshots/6924fb92def656331da30dce DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 6924fb92def656331da30dce. Reason: Bad Request. Params: [6924fb92def656331da30dce], BadRequestDetail: 
2025-11-25T03:27:49.4470053Z         
2025-11-25T03:27:49.4470644Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-25T03:27:49.4471363Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-25T03:27:49.4472017Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-25T03:27:49.4472489Z         
2025-11-25T03:27:49.4472787Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4678.24s)
```

- 2025-11-26

### Error 2025-11-26T03:29:10+00:00
```
2025-11-26T03:29:10.6325932Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-26T03:29:10.6329269Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-26T03:29:10.6330467Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-26T03:29:10.6331262Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:28:33.914810964Z, ProjectID: 692649aafa65867a021b013d, Cluster name: test-acc-tf-c-3987236707435407257
2025-11-26T03:29:10.6359550Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-26T03:29:10.6361855Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-26T03:29:10.6362368Z         
2025-11-26T03:29:10.6363469Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-26T03:29:10.6365124Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-26T03:29:10.6368188Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/692649aafa65867a021b013d/clusters/test-acc-tf-c-3987236707435407257/backup/snapshots/69264ca5fa65867a021ca793 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 69264ca5fa65867a021ca793. Reason: Bad Request. Params: [69264ca5fa65867a021ca793], BadRequestDetail: 
2025-11-26T03:29:10.6369571Z         
2025-11-26T03:29:10.6369918Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-26T03:29:10.6370584Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-26T03:29:10.6371188Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-26T03:29:10.6371514Z         
2025-11-26T03:29:10.6380219Z    test_working_directory=/tmp/plugintest4249032370 test_step_number=1
2025-11-26T03:29:10.6389605Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4514.45s)
```

- 2025-11-27

### Error 2025-11-27T03:28:57+00:00
```
2025-11-27T03:28:57.1217458Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-11-27T03:28:57.1218550Z     resource_test.go:25: Creating execution project: test-acc-tf-p-4288988577540030412
2025-11-27T03:28:57.1222225Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-27T03:28:57.1223490Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-27T03:28:57.1224632Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:28:15.82641283Z, ProjectID: 69279b183c4d827e6c41e1ce, Cluster name: test-acc-tf-c-4764349505841240907
2025-11-27T03:28:57.1255003Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-11-27T03:28:57.1257394Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-11-27T03:28:57.1258010Z         
2025-11-27T03:28:57.1259308Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-27T03:28:57.1261439Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-27T03:28:57.1264692Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69279b183c4d827e6c41e1ce/clusters/test-acc-tf-c-4764349505841240907/backup/snapshots/69279ec7b358b3221e902c96 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 69279ec7b358b3221e902c96. Reason: Bad Request. Params: [69279ec7b358b3221e902c96], BadRequestDetail: 
2025-11-27T03:28:57.1266230Z         
2025-11-27T03:28:57.1266619Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-27T03:28:57.1267332Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-27T03:28:57.1267993Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-27T03:28:57.1268336Z         
2025-11-27T03:28:57.1268650Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (4665.49s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 18 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 20 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
