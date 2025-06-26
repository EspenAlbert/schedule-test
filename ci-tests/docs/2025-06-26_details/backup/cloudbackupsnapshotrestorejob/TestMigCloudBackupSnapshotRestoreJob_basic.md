# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 29 minutes
```
2025-05-28T01:24:47.8123695Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T01:24:47.8124462Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1265437863027100320
2025-05-28T01:24:47.8127361Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T01:24:47.8128537Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T01:24:47.8129389Z     pre_check.go:40: Time before creating cluster: 2025-05-28T00:39:49.53415191Z, ProjectID: 68365b4e1e6d7241ae6f6605, Cluster name: test-acc-tf-c-169446159479007220
2025-05-28T01:24:47.8140650Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1763.43s)
```
#### PASS 21 minutes
```
2025-05-28T09:35:54.7784371Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T09:35:54.7785163Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3205831256581814263
2025-05-28T09:35:54.7788530Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T09:35:54.7789851Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-28T09:35:54.7790738Z     pre_check.go:40: Time before creating cluster: 2025-05-28T08:39:00.435805825Z, ProjectID: 6836cb9ed000797dbe920a9b, Cluster name: test-acc-tf-c-9091819287964390247
2025-05-28T09:35:54.7802467Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1308.03s)
```
### 2025-05-29
#### PASS 22 minutes
```
2025-05-29T01:17:51.4149128Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-29T01:17:51.4149883Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8287715490111752110
2025-05-29T01:17:51.4154896Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-29T01:17:51.4156080Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-29T01:17:51.4156934Z     pre_check.go:40: Time before creating cluster: 2025-05-29T00:39:33.80028753Z, ProjectID: 6837acbf3945df7a91916f4f, Cluster name: test-acc-tf-c-4430873157261041088
2025-05-29T01:17:51.4167449Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1332.68s)
```
### 2025-05-30
#### FAIL an hour
```
2025-05-30T02:32:32.8139577Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8141085Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-2945990079376247197
2025-05-30T02:32:32.8146461Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8148587Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8150144Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:39:43.5990581Z, ProjectID: 6838fe483a84470fe9d51ca7, Cluster name: test-acc-tf-c-2515618762421123240
2025-05-30T02:32:32.8178725Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8180007Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-30T02:32:32.8180945Z         
2025-05-30T02:32:32.8181478Z         Error: context deadline exceeded
2025-05-30T02:32:32.8182004Z         
2025-05-30T02:32:32.8182685Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-05-30T02:32:32.8183965Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-05-30T02:32:32.8185518Z           41: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-05-30T02:32:32.8186177Z         
2025-05-30T02:32:32.8186739Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (6775.99s)
```
#### PASS 16 minutes
```
2025-05-30T08:21:40.0570577Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T08:21:40.0571326Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9132615021240272039
2025-05-30T08:21:40.0574872Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T08:21:40.0576178Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T08:21:40.0577043Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:35:32.704113811Z, ProjectID: 68395fbd9fbb580dba4e61b9, Cluster name: test-acc-tf-c-1641153944517950402
2025-05-30T08:21:40.0588133Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1019.83s)
```
### 2025-05-31
#### PASS 17 minutes
```
2025-05-31T01:13:21.9478413Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-31T01:13:21.9480045Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9171438559060293397
2025-05-31T01:13:21.9486521Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-31T01:13:21.9489323Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-31T01:13:21.9491282Z     pre_check.go:40: Time before creating cluster: 2025-05-31T00:38:43.187934973Z, ProjectID: 683a4f8cebf07c11d4e957c6, Cluster name: test-acc-tf-c-2386154766954027663
2025-05-31T01:13:21.9512141Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1048.11s)
```
### 2025-06-01
#### PASS 14 minutes
```
2025-06-01T01:17:56.7876080Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T01:17:56.7876858Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4550221978569474687
2025-06-01T01:17:56.7879883Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T01:17:56.7881099Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T01:17:56.7881971Z     pre_check.go:40: Time before creating cluster: 2025-06-01T00:42:43.459009648Z, ProjectID: 683ba1fb2ebc1806778a1ff8, Cluster name: test-acc-tf-c-1726164214899597371
2025-06-01T01:17:56.7893546Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (867.91s)
```
#### PASS 17 minutes
```
2025-06-01T05:25:03.4094557Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T05:25:03.4095317Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1011529541723448192
2025-06-01T05:25:03.4098343Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T05:25:03.4099717Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T05:25:03.4100584Z     pre_check.go:40: Time before creating cluster: 2025-06-01T04:51:40.043243852Z, ProjectID: 683bdc55cc8f0935c7c1aa6b, Cluster name: test-acc-tf-c-5569603264482448804
2025-06-01T05:25:03.4111731Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1039.94s)
```
#### PASS 18 minutes
```
2025-06-01T09:32:08.8719621Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T09:32:08.8720388Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-414409776272019076
2025-06-01T09:32:08.8723326Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T09:32:08.8724504Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T09:32:08.8725563Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:00:38.275597416Z, ProjectID: 683c16af7bf9cf70212cd614, Cluster name: test-acc-tf-c-5336625088226988800
2025-06-01T09:32:08.8736849Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1118.32s)
```
#### PASS 18 minutes
```
2025-06-01T13:48:29.7241519Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T13:48:29.7242881Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-870426497141045172
2025-06-01T13:48:29.7247977Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T13:48:29.7250250Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T13:48:29.7251791Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:09:53.740657696Z, ProjectID: 683c511bcc8f0935c7c2a278, Cluster name: test-acc-tf-c-3954574976126208951
2025-06-01T13:48:29.7271882Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1088.44s)
```
#### PASS 17 minutes
```
2025-06-01T17:53:54.6697072Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T17:53:54.6698413Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-7179081266985345036
2025-06-01T17:53:54.6703439Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T17:53:54.6705462Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T17:53:54.6707005Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:19:16.857225181Z, ProjectID: 683c8b8d7bf9cf70212daeee, Cluster name: test-acc-tf-c-8338760205364611509
2025-06-01T17:53:54.6726519Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1058.53s)
```
#### PASS 17 minutes
```
2025-06-01T22:00:25.7937982Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T22:00:25.7938856Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4365564932458995057
2025-06-01T22:00:25.7942366Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T22:00:25.7943716Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-01T22:00:25.7944708Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:27:35.111181994Z, ProjectID: 683cc5c07bf9cf70212e12e4, Cluster name: test-acc-tf-c-9025974737219753456
2025-06-01T22:00:25.7957663Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1038.25s)
```
### 2025-06-02
#### PASS 17 minutes
```
2025-06-02T01:14:30.5701909Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T01:14:30.5702670Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1033737116405921866
2025-06-02T01:14:30.5705599Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T01:14:30.5706946Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T01:14:30.5707814Z     pre_check.go:40: Time before creating cluster: 2025-06-02T00:41:08.22890875Z, ProjectID: 683cf31ccc8f0935c7c3d99c, Cluster name: test-acc-tf-c-8079710426449259016
2025-06-02T01:14:30.5718230Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1070.21s)
```
#### PASS 20 minutes
```
2025-06-02T02:13:46.2638709Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T02:13:46.2640020Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4686849377450804679
2025-06-02T02:13:46.2644984Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T02:13:46.2647000Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T02:13:46.2648749Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:36:54.791762694Z, ProjectID: 683d002f7bf9cf70212eae79, Cluster name: test-acc-tf-c-2542742535304691159
2025-06-02T02:13:46.2668054Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1221.18s)
```
#### PASS 18 minutes
```
2025-06-02T06:30:59.3790206Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T06:30:59.3791493Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8472239005806590643
2025-06-02T06:30:59.3796378Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T06:30:59.3798682Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-02T06:30:59.3800427Z     pre_check.go:40: Time before creating cluster: 2025-06-02T05:53:06.738893496Z, ProjectID: 683d3c3a7bf9cf70212f2eae, Cluster name: test-acc-tf-c-5572939015859353018
2025-06-02T06:30:59.3818650Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1093.20s)
```
### 2025-06-03
#### PASS 19 minutes
```
2025-06-03T01:13:25.4717076Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-03T01:13:25.4718032Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6301404551497316675
2025-06-03T01:13:25.4721752Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-03T01:13:25.4723408Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-03T01:13:25.4724402Z     pre_check.go:40: Time before creating cluster: 2025-06-03T00:40:29.400913222Z, ProjectID: 683e4476c5fc37283c3631bb, Cluster name: test-acc-tf-c-4764314013924044725
2025-06-03T01:13:25.4737094Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1191.05s)
```
### 2025-06-04
#### PASS 19 minutes
```
2025-06-04T01:07:40.0944386Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-04T01:07:40.0945270Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-440310676814440763
2025-06-04T01:07:40.0949122Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-04T01:07:40.0950446Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-04T01:07:40.0951803Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:31:00.631511932Z, ProjectID: 683f93be4fa12629039cebad, Cluster name: test-acc-tf-c-2379304516466912626
2025-06-04T01:07:40.0964952Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1150.66s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:36:03.3315991Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3317338Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8905900491303417691
2025-06-05T00:36:03.3322007Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3324081Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3325732Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:42.424585413Z, ProjectID: 6840e52ac939f274132524c3, Cluster name: test-acc-tf-c-5043022338921756439
2025-06-05T00:36:03.3346037Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3347316Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:36:03.3348234Z         
2025-06-05T00:36:03.3351373Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e52ac939f274132524c3/clusters/test-acc-tf-c-5043022338921756439 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3353521Z         
2025-06-05T00:36:03.3354211Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3355720Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3356947Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3357572Z         
2025-06-05T00:36:03.3358115Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (191.31s)
```
### 2025-06-06
#### PASS 17 minutes
```
2025-06-06T01:08:25.1293150Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-06T01:08:25.1294492Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-5728915478240423654
2025-06-06T01:08:25.1299569Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-06T01:08:25.1301842Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-06T01:08:25.1303404Z     pre_check.go:40: Time before creating cluster: 2025-06-06T00:31:57.321752451Z, ProjectID: 684236f68dba3d3587c4b79f, Cluster name: test-acc-tf-c-8641789058029353585
2025-06-06T01:08:25.1321041Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1039.97s)
```
### 2025-06-07
#### PASS 17 minutes
```
2025-06-07T01:05:44.4808776Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-07T01:05:44.4810101Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-7760270922320400768
2025-06-07T01:05:44.4815172Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-07T01:05:44.4817221Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-07T01:05:44.4818779Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:30:30.931493544Z, ProjectID: 68438820bf49d05598c16314, Cluster name: test-acc-tf-c-6698492463819811404
2025-06-07T01:05:44.4837654Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1057.43s)
```
### 2025-06-08
#### PASS 19 minutes
```
2025-06-08T01:30:48.3700234Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-08T01:30:48.3700972Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3287013858315981738
2025-06-08T01:30:48.3703846Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-08T01:30:48.3705177Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-08T01:30:48.3706031Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:34:08.673470221Z, ProjectID: 6844da7a69401b3bb3c382d1, Cluster name: test-acc-tf-c-8559468135962768438
2025-06-08T01:30:48.3716928Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1168.78s)
```
### 2025-06-09
#### PASS 16 minutes
```
2025-06-09T01:12:33.0025400Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-09T01:12:33.0026146Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6577844315272035001
2025-06-09T01:12:33.0029148Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-09T01:12:33.0030371Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-09T01:12:33.0031382Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:32:47.271228564Z, ProjectID: 68462ba90a8f6759322c4fd9, Cluster name: test-acc-tf-c-4239158482015371046
2025-06-09T01:12:33.0041605Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1019.11s)
```
### 2025-06-10
#### PASS 28 minutes
```
2025-06-10T01:22:54.1011640Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-10T01:22:54.1012465Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4373374036623100666
2025-06-10T01:22:54.1015524Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-10T01:22:54.1016771Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-10T01:22:54.1017801Z     pre_check.go:40: Time before creating cluster: 2025-06-10T00:39:37.184704299Z, ProjectID: 68477ec2a888514df22a88a3, Cluster name: test-acc-tf-c-4482206005848532318
2025-06-10T01:22:54.1029287Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1719.75s)
```
### 2025-06-11
#### PASS 17 minutes
```
2025-06-11T01:06:03.1413585Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T01:06:03.1414563Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-164520871722786122
2025-06-11T01:06:03.1418191Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T01:06:03.1419562Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T01:06:03.1420505Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:30:30.909332082Z, ProjectID: 6848ce1f62545b2c8dbe8902, Cluster name: test-acc-tf-c-2827828000111404436
2025-06-11T01:06:03.1432227Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1077.97s)
```
#### PASS 18 minutes
```
2025-06-11T08:49:03.6355976Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T08:49:03.6357304Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-7994379350035614434
2025-06-11T08:49:03.6362323Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T08:49:03.6364498Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-11T08:49:03.6366004Z     pre_check.go:40: Time before creating cluster: 2025-06-11T07:39:01.012544552Z, ProjectID: 6849328e49c05124969e83e9, Cluster name: test-acc-tf-c-524198795739568919
2025-06-11T08:49:03.6383591Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1119.58s)
```
### 2025-06-12
#### PASS 18 minutes
```
2025-06-12T01:05:46.0315294Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-12T01:05:46.0316767Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-758885347789090540
2025-06-12T01:05:46.0321784Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-12T01:05:46.0323797Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-12T01:05:46.0325303Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:30:15.36049372Z, ProjectID: 684a1f8f5c025329ee516bfa, Cluster name: test-acc-tf-c-2953195398581988239
2025-06-12T01:05:46.0344150Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1131.06s)
```
### 2025-06-13
#### PASS 18 minutes
```
2025-06-13T01:04:15.0971446Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-13T01:04:15.0972186Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-7609842512736611318
2025-06-13T01:04:15.0975143Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-13T01:04:15.0976265Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-13T01:04:15.0977115Z     pre_check.go:40: Time before creating cluster: 2025-06-13T00:30:28.428738787Z, ProjectID: 684b711d868b87498d555e62, Cluster name: test-acc-tf-c-4281561810603145567
2025-06-13T01:04:15.0987624Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1134.69s)
```
### 2025-06-14
#### PASS 22 minutes
```
2025-06-14T02:34:18.1511477Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-14T02:34:18.1512560Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3089604122096860858
2025-06-14T02:34:18.1515590Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-14T02:34:18.1516732Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-14T02:34:18.1517590Z     pre_check.go:40: Time before creating cluster: 2025-06-14T00:30:07.960622116Z, ProjectID: 684cc28825b50457df29ba81, Cluster name: test-acc-tf-c-5649418840657517308
2025-06-14T02:34:18.1532044Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1362.53s)
```
### 2025-06-15
#### PASS 19 minutes
```
2025-06-15T01:33:52.3732446Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-15T01:33:52.3733754Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1429149296259431723
2025-06-15T01:33:52.3739296Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-15T01:33:52.3741306Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-15T01:33:52.3742836Z     pre_check.go:40: Time before creating cluster: 2025-06-15T00:33:39.89192211Z, ProjectID: 684e14dc83e3896e131aef1a, Cluster name: test-acc-tf-c-6910630299648521582
2025-06-15T01:33:52.3762431Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1198.18s)
```
### 2025-06-16
#### PASS 20 minutes
```
2025-06-16T01:05:33.3461372Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-16T01:05:33.3462413Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9011334565142802191
2025-06-16T01:05:33.3465294Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-16T01:05:33.3466555Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-16T01:05:33.3467393Z     pre_check.go:40: Time before creating cluster: 2025-06-16T00:32:03.097404928Z, ProjectID: 684f65fb8f295e188b9ee4a8, Cluster name: test-acc-tf-c-7091644176381588916
2025-06-16T01:05:33.3478077Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1215.39s)
```
### 2025-06-17
#### PASS 19 minutes
```
2025-06-17T01:11:42.2297103Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-17T01:11:42.2298593Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-5220016128080510053
2025-06-17T01:11:42.2303596Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-17T01:11:42.2305719Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-17T01:11:42.2307298Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:31:09.114922095Z, ProjectID: 6850b7466200565f4c9d17e0, Cluster name: test-acc-tf-c-2648391574094537558
2025-06-17T01:11:42.2326661Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1140.48s)
```
### 2025-06-18
#### PASS 27 minutes
```
2025-06-18T01:07:06.6518274Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-18T01:07:06.6519180Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4223232482206484820
2025-06-18T01:07:06.6522301Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-18T01:07:06.6523762Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-18T01:07:06.6524727Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:31:05.881370901Z, ProjectID: 685208c3e8055c11bb5dcacc, Cluster name: test-acc-tf-c-3136688394670892263
2025-06-18T01:07:06.6536325Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1626.49s)
```
### 2025-06-19
#### PASS 18 minutes
```
2025-06-19T01:47:51.3821541Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-19T01:47:51.3822384Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6436815141606079608
2025-06-19T01:47:51.3825384Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-19T01:47:51.3826519Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-19T01:47:51.3827359Z     pre_check.go:40: Time before creating cluster: 2025-06-19T00:31:22.733364719Z, ProjectID: 68535a52e16f343ef1d9ecfd, Cluster name: test-acc-tf-c-7380895849817345395
2025-06-19T01:47:51.3835338Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1088.70s)
```
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T01:05:10.4220034Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-20T01:05:10.4220791Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4619061894695068125
2025-06-20T01:05:10.4223780Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-20T01:05:10.4224950Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-20T01:05:10.4225799Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:30:48.813025238Z, ProjectID: 6854abb2cd32be2bdf8c1995, Cluster name: test-acc-tf-c-5312011367841420215
2025-06-20T01:05:10.4240313Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1150.10s)
```
### 2025-06-21
#### PASS 18 minutes
```
2025-06-21T01:05:26.0483273Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-21T01:05:26.0484609Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-533474102448656747
2025-06-21T01:05:26.0489656Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-21T01:05:26.0491766Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-21T01:05:26.0493276Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:30:36.766361091Z, ProjectID: 6855fd24f3e6555d2acba0e4, Cluster name: test-acc-tf-c-731114586523078756
2025-06-21T01:05:26.0512780Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1131.16s)
```
### 2025-06-22
#### PASS 20 minutes
```
2025-06-22T01:35:35.9566293Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-22T01:35:35.9567103Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4168896001304397410
2025-06-22T01:35:35.9569965Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-22T01:35:35.9571090Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-22T01:35:35.9571962Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:33:51.189601973Z, ProjectID: 68574f67af7a0954e84af9ad, Cluster name: test-acc-tf-c-2864205506512459345
2025-06-22T01:35:35.9582995Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1200.68s)
```
### 2025-06-23
#### PASS 17 minutes
```
2025-06-23T01:06:09.0695713Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-23T01:06:09.0696596Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1973859606919507865
2025-06-23T01:06:09.0699826Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-23T01:06:09.0701103Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-23T01:06:09.0702124Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:33:09.947149881Z, ProjectID: 6858a0bfee34e36cf9c52509, Cluster name: test-acc-tf-c-7777500304615467300
2025-06-23T01:06:09.0713939Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1048.76s)
```
### 2025-06-24
#### PASS 17 minutes
```
2025-06-24T01:07:05.4440289Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-24T01:07:05.4441512Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4976199798802534943
2025-06-24T01:07:05.4444826Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-24T01:07:05.4445945Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-24T01:07:05.4446787Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:30:47.284264139Z, ProjectID: 6859f1b022100658cf267e75, Cluster name: test-acc-tf-c-7305775086170513270
2025-06-24T01:07:05.4457017Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1057.76s)
```
### 2025-06-25
#### PASS 19 minutes
```
2025-06-25T01:06:59.3156719Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-25T01:06:59.3157443Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1483325611376283830
2025-06-25T01:06:59.3160193Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-25T01:06:59.3161323Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-25T01:06:59.3162301Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:31:06.724536627Z, ProjectID: 685b4343b37149039973e0a8, Cluster name: test-acc-tf-c-5917684451681661380
2025-06-25T01:06:59.3174382Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1191.91s)
```
### 2025-06-26
#### PASS 21 minutes
```
2025-06-26T01:08:09.6299678Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-26T01:08:09.6300405Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6117951157148502411
2025-06-26T01:08:09.6303489Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-26T01:08:09.6304762Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-26T01:08:09.6305603Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:31:16.312538803Z, ProjectID: 685c94cd1b4e2c6e5fe45c8f, Cluster name: test-acc-tf-c-2183112733391493322
2025-06-26T01:08:09.6310213Z --- PASS: TestMigCloudBackupSnapshotRestoreJob_basic (1261.54s)
```