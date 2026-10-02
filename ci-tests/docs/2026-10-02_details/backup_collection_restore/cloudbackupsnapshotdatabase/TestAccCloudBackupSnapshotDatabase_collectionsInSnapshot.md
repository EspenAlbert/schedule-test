# backup_collection_restore/cloudbackupsnapshotdatabase/TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 937.03s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev | timeout | 3603.08s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 942.09s
[2026-09-18 01:49](#error-2026-09-18t0149190000) |  | dev | timeout | 1853.09s
[2026-09-19 01:13](#error-2026-09-19t0113440000) |  | dev | timeout | 1778.05s
[2026-09-23 08:49](#error-2026-09-23t0849380000) |  | dev |  | 1349.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 23 minutes
- 2026-09-03 PASS 28 minutes
- 2026-09-04 PASS 31 minutes
- 2026-09-05 PASS 20 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 21 minutes
- 2026-09-08 PASS 25 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10

### Error 2026-09-10T00:57:57+00:00
```
2026-09-10T00:57:57.7447163Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-10T00:57:57.7448642Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-1446158399331884555
2026-09-10T00:57:57.7450252Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-3668435982581552256
2026-09-10T00:57:57.7450960Z 2026/09/10 00:40:52 [DEBUG] Waiting for state to become: [IDLE]
2026-09-10T00:57:57.7451406Z 2026/09/10 00:43:52 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7451801Z 2026/09/10 00:44:52 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7452199Z 2026/09/10 00:45:02 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7452579Z 2026/09/10 00:46:02 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7452958Z 2026/09/10 00:46:12 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7453672Z 2026/09/10 00:47:13 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7454080Z 2026/09/10 00:47:23 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7454470Z 2026/09/10 00:48:23 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7454849Z 2026/09/10 00:48:33 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7455216Z 2026/09/10 00:49:33 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7455588Z 2026/09/10 00:49:43 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7456169Z 2026/09/10 00:50:44 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7456551Z 2026/09/10 00:50:54 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7456917Z 2026/09/10 00:51:54 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7457292Z 2026/09/10 00:52:04 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7457661Z 2026/09/10 00:53:05 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7458033Z 2026/09/10 00:53:15 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7458412Z 2026/09/10 00:54:15 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.7458782Z 2026/09/10 00:54:25 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.7459201Z 2026/09/10 00:55:25 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-10T00:57:57.7459644Z     data_source_test.go:24: 
2026-09-10T00:57:57.7460816Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-10T00:57:57.7463037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-10T00:57:57.7464236Z         	Error:      	Received unexpected error:
2026-09-10T00:57:57.7465521Z         	            	sample dataset load 6aa1fffd4ab31ba345271d54 failed for cluster 6aa1fc904ab31ba345243e4a:test-acc-tf-c-3668435982581552256
2026-09-10T00:57:57.7466409Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-10T00:57:57.7466987Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (937.32s)
```

- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T01:42:10+00:00
```
2026-09-11T01:42:10.4683995Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-11T01:42:10.4685085Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-5127566398623603970
2026-09-11T01:42:10.4686302Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-3035427698166179476
2026-09-11T01:42:10.4687230Z 2026/09/11 00:41:40 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T01:42:10.4687749Z 2026/09/11 00:44:40 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4688226Z 2026/09/11 00:45:40 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4688694Z 2026/09/11 00:45:50 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4689150Z 2026/09/11 00:46:51 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4689602Z 2026/09/11 00:47:01 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4690296Z 2026/09/11 00:48:01 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4690749Z 2026/09/11 00:48:11 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4691211Z 2026/09/11 00:49:11 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4691669Z 2026/09/11 00:49:22 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4692122Z 2026/09/11 00:50:22 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4692811Z 2026/09/11 00:50:32 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4693271Z 2026/09/11 00:51:32 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4693723Z 2026/09/11 00:51:42 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4694174Z 2026/09/11 00:52:43 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4694620Z 2026/09/11 00:52:53 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4695018Z 2026/09/11 00:53:53 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4695412Z 2026/09/11 00:54:03 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4695795Z 2026/09/11 00:55:03 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4696181Z 2026/09/11 00:55:14 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4696567Z 2026/09/11 00:56:14 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4696944Z 2026/09/11 00:56:24 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4697317Z 2026/09/11 00:57:24 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4697686Z 2026/09/11 00:57:34 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4698058Z 2026/09/11 00:58:35 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4698431Z 2026/09/11 00:58:45 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4698811Z 2026/09/11 00:59:45 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4699176Z 2026/09/11 00:59:55 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4699556Z 2026/09/11 01:00:56 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4700059Z 2026/09/11 01:01:06 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4700437Z 2026/09/11 01:02:06 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4700798Z 2026/09/11 01:02:16 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4701171Z 2026/09/11 01:03:16 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4701540Z 2026/09/11 01:03:26 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4701945Z 2026/09/11 01:04:27 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4702333Z 2026/09/11 01:04:37 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4702715Z 2026/09/11 01:05:37 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4703088Z 2026/09/11 01:05:47 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4703617Z 2026/09/11 01:06:47 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4703981Z 2026/09/11 01:06:57 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4704361Z 2026/09/11 01:07:58 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4704728Z 2026/09/11 01:08:08 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4705096Z 2026/09/11 01:09:08 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4705459Z 2026/09/11 01:09:18 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4705831Z 2026/09/11 01:10:19 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4706196Z 2026/09/11 01:10:29 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4706568Z 2026/09/11 01:11:29 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4706935Z 2026/09/11 01:11:39 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4707305Z 2026/09/11 01:12:39 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4707694Z 2026/09/11 01:12:49 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4708081Z 2026/09/11 01:13:50 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4708455Z 2026/09/11 01:14:00 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4708830Z 2026/09/11 01:15:00 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4709204Z 2026/09/11 01:15:10 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4709583Z 2026/09/11 01:16:10 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4710183Z 2026/09/11 01:16:21 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4710641Z 2026/09/11 01:17:21 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4711038Z 2026/09/11 01:17:31 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4711418Z 2026/09/11 01:18:31 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4711919Z 2026/09/11 01:18:41 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4712300Z 2026/09/11 01:19:42 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4712673Z 2026/09/11 01:19:52 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4713214Z 2026/09/11 01:20:52 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4713606Z 2026/09/11 01:21:02 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4713994Z 2026/09/11 01:22:02 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4714368Z 2026/09/11 01:22:13 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4714740Z 2026/09/11 01:23:13 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4715107Z 2026/09/11 01:23:23 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4715481Z 2026/09/11 01:24:23 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4715854Z 2026/09/11 01:24:33 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4716225Z 2026/09/11 01:25:33 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4716606Z 2026/09/11 01:25:44 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4716974Z 2026/09/11 01:26:44 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4717347Z 2026/09/11 01:26:54 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4717729Z 2026/09/11 01:27:54 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4718101Z 2026/09/11 01:28:04 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4718468Z 2026/09/11 01:29:05 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4718840Z 2026/09/11 01:29:15 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4719218Z 2026/09/11 01:30:15 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4719599Z 2026/09/11 01:30:25 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4720104Z 2026/09/11 01:31:25 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4720483Z 2026/09/11 01:31:35 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4720859Z 2026/09/11 01:32:36 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4721235Z 2026/09/11 01:32:46 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4721603Z 2026/09/11 01:33:46 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4721971Z 2026/09/11 01:33:56 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4722473Z 2026/09/11 01:34:56 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4722844Z 2026/09/11 01:35:06 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4723210Z 2026/09/11 01:36:07 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4723579Z 2026/09/11 01:36:17 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4723948Z 2026/09/11 01:37:17 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4724321Z 2026/09/11 01:37:27 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4724683Z 2026/09/11 01:38:27 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4725052Z 2026/09/11 01:38:37 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4725426Z 2026/09/11 01:39:38 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4725801Z 2026/09/11 01:39:48 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4726162Z 2026/09/11 01:40:48 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.4726534Z 2026/09/11 01:40:58 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.4726938Z 2026/09/11 01:41:40 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T01:42:10.4727405Z 2026/09/11 01:41:40 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T01:42:10.4727921Z     cloud_backup_collection_restore_fixture.go:83: 
2026-09-11T01:42:10.4728955Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T01:42:10.4731972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T01:42:10.4735536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:110
2026-09-11T01:42:10.4739122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:83
2026-09-11T01:42:10.4740818Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:78
2026-09-11T01:42:10.4741726Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:69
2026-09-11T01:42:10.4743543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:81
2026-09-11T01:42:10.4745782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-11T01:42:10.4746693Z         	Error:      	Received unexpected error:
2026-09-11T01:42:10.4747933Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T01:42:10.4748808Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-11T01:42:10.4749502Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3035427698166179476
2026-09-11T01:42:10.4750314Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (3603.80s)
```

  - FAIL 15 minutes

### Error 2026-09-11T07:00:33+00:00
```
2026-09-11T07:00:33.3493714Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-11T07:00:33.3494466Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-6304193372732283863
2026-09-11T07:00:33.3495288Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-3807914100917836511
2026-09-11T07:00:33.3495864Z 2026/09/11 06:40:53 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T07:00:33.3496271Z 2026/09/11 06:43:54 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3496640Z 2026/09/11 06:44:54 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3497001Z 2026/09/11 06:45:04 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3497361Z 2026/09/11 06:46:05 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3497726Z 2026/09/11 06:46:15 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3498270Z 2026/09/11 06:47:15 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3498641Z 2026/09/11 06:47:26 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3499001Z 2026/09/11 06:48:26 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3499378Z 2026/09/11 06:48:36 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3499741Z 2026/09/11 06:49:37 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3500095Z 2026/09/11 06:49:47 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3500467Z 2026/09/11 06:50:47 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3500834Z 2026/09/11 06:50:58 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3501434Z 2026/09/11 06:51:58 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3501889Z 2026/09/11 06:52:08 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3502257Z 2026/09/11 06:53:09 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3502630Z 2026/09/11 06:53:19 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3503008Z 2026/09/11 06:54:19 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3503374Z 2026/09/11 06:54:30 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3503780Z 2026/09/11 06:55:30 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-11T07:00:33.3504192Z     data_source_test.go:24: 
2026-09-11T07:00:33.3505339Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-11T07:00:33.3507298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-11T07:00:33.3508111Z         	Error:      	Received unexpected error:
2026-09-11T07:00:33.3509228Z         	            	sample dataset load 6aa3a5e2821e0ea7a45ff3c4 failed for cluster 6aa3a270821e0ea7a45d8346:test-acc-tf-c-3807914100917836511
2026-09-11T07:00:33.3510047Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-11T07:00:33.3510715Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (942.94s)
```

- 2026-09-12 PASS 20 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 30 minutes
- 2026-09-15 PASS 29 minutes
- 2026-09-16 PASS 31 minutes
- 2026-09-17 PASS 30 minutes
- 2026-09-18

### Error 2026-09-18T01:49:19+00:00
```
2026-09-18T01:49:19.5392174Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-18T01:49:19.5393727Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-4053942088498131288
2026-09-18T01:49:19.5395473Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-8912434857674832854
2026-09-18T01:49:19.5396627Z 2026/09/18 00:42:12 [DEBUG] Waiting for state to become: [IDLE]
2026-09-18T01:49:19.5397390Z 2026/09/18 00:45:12 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5397793Z 2026/09/18 00:46:13 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5398177Z 2026/09/18 00:46:23 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5398549Z 2026/09/18 00:47:23 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5399214Z 2026/09/18 00:47:34 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5399610Z 2026/09/18 00:48:34 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5399980Z 2026/09/18 00:48:44 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5400347Z 2026/09/18 00:49:45 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5400708Z 2026/09/18 00:49:55 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5401080Z 2026/09/18 00:50:56 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5401451Z 2026/09/18 00:51:06 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5401816Z 2026/09/18 00:52:06 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5402877Z 2026/09/18 00:52:17 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5403594Z 2026/09/18 00:53:17 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5404054Z 2026/09/18 00:53:27 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5404420Z 2026/09/18 00:54:28 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5404785Z 2026/09/18 00:54:38 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5405148Z 2026/09/18 00:55:39 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5405515Z 2026/09/18 00:55:49 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5405876Z 2026/09/18 00:56:49 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5406232Z 2026/09/18 00:57:00 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5406646Z 2026/09/18 00:58:00 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-18T01:49:19.5407071Z 2026/09/18 00:59:01 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5407439Z 2026/09/18 01:00:01 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5407811Z 2026/09/18 01:00:12 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5408174Z 2026/09/18 01:01:12 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5408537Z 2026/09/18 01:01:22 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5409160Z 2026/09/18 01:02:23 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5409553Z 2026/09/18 01:02:33 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5409922Z 2026/09/18 01:03:33 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5410285Z 2026/09/18 01:03:43 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5410647Z 2026/09/18 01:04:44 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5411002Z 2026/09/18 01:04:54 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5411362Z 2026/09/18 01:05:54 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5411725Z 2026/09/18 01:06:05 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5412085Z 2026/09/18 01:07:06 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5412861Z 2026/09/18 01:07:17 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5413299Z 2026/09/18 01:08:17 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5413675Z 2026/09/18 01:08:27 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5414041Z 2026/09/18 01:09:28 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5414404Z 2026/09/18 01:09:38 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5414769Z 2026/09/18 01:10:38 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5415134Z 2026/09/18 01:10:49 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5415498Z 2026/09/18 01:11:49 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5415856Z 2026/09/18 01:11:59 [TRACE] Waiting 1m0s before next try
2026-09-18T01:49:19.5416221Z 2026/09/18 01:13:00 [TRACE] Waiting 10s before next try
2026-09-18T01:49:19.5416605Z 2026/09/18 01:13:00 [WARN] WaitForState timeout after 15m0s
2026-09-18T01:49:19.5417120Z 2026/09/18 01:13:00 [WARN] WaitForState starting 30s refresh grace period
2026-09-18T01:49:19.5417594Z     data_source_test.go:24: 
2026-09-18T01:49:19.5418732Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-18T01:49:19.5421229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-18T01:49:19.5422108Z         	Error:      	Received unexpected error:
2026-09-18T01:49:19.5423129Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-18T01:49:19.5423896Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-18T01:49:19.5424476Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (1853.85s)
```

- 2026-09-19

### Error 2026-09-19T01:13:44+00:00
```
2026-09-19T01:13:44.8571024Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-19T01:13:44.8572083Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-6611288448858675131
2026-09-19T01:13:44.8572945Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-5550513849468403180
2026-09-19T01:13:44.8573561Z 2026/09/19 00:41:17 [DEBUG] Waiting for state to become: [IDLE]
2026-09-19T01:13:44.8573986Z 2026/09/19 00:44:17 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8574391Z 2026/09/19 00:45:17 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8574770Z 2026/09/19 00:45:27 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8575137Z 2026/09/19 00:46:28 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8575515Z 2026/09/19 00:46:38 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8575887Z 2026/09/19 00:47:38 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8576258Z 2026/09/19 00:47:48 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8576628Z 2026/09/19 00:48:49 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8577004Z 2026/09/19 00:48:59 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8577381Z 2026/09/19 00:49:59 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8577995Z 2026/09/19 00:50:09 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8578365Z 2026/09/19 00:51:09 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8578734Z 2026/09/19 00:51:20 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8579357Z 2026/09/19 00:52:20 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8579739Z 2026/09/19 00:52:30 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8580101Z 2026/09/19 00:53:30 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8580484Z 2026/09/19 00:53:41 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8580872Z 2026/09/19 00:54:41 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8581261Z 2026/09/19 00:54:51 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8581656Z 2026/09/19 00:55:51 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-19T01:13:44.8582063Z 2026/09/19 00:56:52 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8582422Z 2026/09/19 00:57:52 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8582784Z 2026/09/19 00:58:02 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8583140Z 2026/09/19 00:59:02 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8583499Z 2026/09/19 00:59:12 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8583863Z 2026/09/19 01:00:13 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8584225Z 2026/09/19 01:00:23 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8584576Z 2026/09/19 01:01:23 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8584935Z 2026/09/19 01:01:33 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8585297Z 2026/09/19 01:02:33 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8585657Z 2026/09/19 01:02:43 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8586009Z 2026/09/19 01:03:44 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8586373Z 2026/09/19 01:03:54 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8586730Z 2026/09/19 01:04:54 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8587092Z 2026/09/19 01:05:04 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8587681Z 2026/09/19 01:06:04 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8588153Z 2026/09/19 01:06:14 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8588524Z 2026/09/19 01:07:14 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8588893Z 2026/09/19 01:07:24 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8589252Z 2026/09/19 01:08:25 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8589622Z 2026/09/19 01:08:35 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8589995Z 2026/09/19 01:09:35 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8590372Z 2026/09/19 01:09:45 [TRACE] Waiting 1m0s before next try
2026-09-19T01:13:44.8590732Z 2026/09/19 01:10:45 [TRACE] Waiting 10s before next try
2026-09-19T01:13:44.8591115Z 2026/09/19 01:10:51 [WARN] WaitForState timeout after 15m0s
2026-09-19T01:13:44.8591562Z 2026/09/19 01:10:51 [WARN] WaitForState starting 30s refresh grace period
2026-09-19T01:13:44.8592013Z     data_source_test.go:24: 
2026-09-19T01:13:44.8593115Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-19T01:13:44.8597516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-19T01:13:44.8598910Z         	Error:      	Received unexpected error:
2026-09-19T01:13:44.8600559Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:13:44.8601389Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-19T01:13:44.8601935Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (1778.54s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 30 minutes
- 2026-09-23
  - PASS 33 minutes
  - FAIL 22 minutes

### Error 2026-09-23T08:49:38+00:00
```
2026-09-23T08:49:38.6842642Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-23T08:49:38.6844170Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-6015499195542073625
2026-09-23T08:49:38.6845844Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-3500803343824389163
2026-09-23T08:49:38.6846923Z 2026/09/23 08:25:41 [DEBUG] Waiting for state to become: [IDLE]
2026-09-23T08:49:38.6847630Z 2026/09/23 08:28:41 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6848296Z 2026/09/23 08:29:42 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6848967Z 2026/09/23 08:29:52 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6849947Z 2026/09/23 08:30:52 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6850642Z 2026/09/23 08:31:02 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6851269Z 2026/09/23 08:32:02 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6851910Z 2026/09/23 08:32:13 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6852547Z 2026/09/23 08:33:13 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6853162Z 2026/09/23 08:33:23 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6853790Z 2026/09/23 08:34:23 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6854653Z 2026/09/23 08:34:33 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6855327Z 2026/09/23 08:35:33 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6855977Z 2026/09/23 08:35:44 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6856624Z 2026/09/23 08:36:44 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6857283Z 2026/09/23 08:36:54 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6857912Z 2026/09/23 08:37:54 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6858504Z 2026/09/23 08:38:04 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6859623Z 2026/09/23 08:39:04 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6860278Z 2026/09/23 08:39:15 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6860976Z 2026/09/23 08:40:15 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-23T08:49:38.6861676Z 2026/09/23 08:41:15 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6862329Z 2026/09/23 08:42:15 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6862966Z 2026/09/23 08:42:25 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6863611Z 2026/09/23 08:43:26 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6864248Z 2026/09/23 08:43:36 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6864882Z 2026/09/23 08:44:36 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6865535Z 2026/09/23 08:44:46 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6866195Z 2026/09/23 08:45:46 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6866837Z 2026/09/23 08:45:56 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6867488Z 2026/09/23 08:46:56 [TRACE] Waiting 10s before next try
2026-09-23T08:49:38.6868116Z 2026/09/23 08:47:06 [TRACE] Waiting 1m0s before next try
2026-09-23T08:49:38.6868764Z     data_source_test.go:24: 
2026-09-23T08:49:38.6871455Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T08:49:38.6877241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-09-23T08:49:38.6878840Z         	Error:      	Received unexpected error:
2026-09-23T08:49:38.6882684Z         	            	sample dataset load 6ab3906ff8a29abe235bc83c failed for cluster 6ab38d01f8a29abe2358a92b:test-acc-tf-c-3500803343824389163: Target cluster does not have enough free space to import dataset
2026-09-23T08:49:38.6884656Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-09-23T08:49:38.6885650Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (1349.22s)
```

- 2026-09-24 PASS 28 minutes
- 2026-09-25 PASS 26 minutes
- 2026-09-26 PASS 23 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 21 minutes
- 2026-09-29 PASS 21 minutes
- 2026-09-30 PASS 19 minutes
- 2026-10-01 PASS 20 minutes
- 2026-10-02 PASS 25 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 18 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 18 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 22 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 18 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
