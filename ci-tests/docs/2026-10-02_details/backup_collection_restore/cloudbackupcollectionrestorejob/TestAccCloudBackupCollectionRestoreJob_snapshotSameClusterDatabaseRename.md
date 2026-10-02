# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 938.02s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev | timeout | 3604.02s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 1012.04s
[2026-09-19 01:12](#error-2026-09-19t0112230000) |  | dev | timeout | 1779.02s
[2026-09-23 01:01](#error-2026-09-23t0101090000) |  | dev |  | 1082.09s
[2026-09-23 08:42](#error-2026-09-23t0842350000) |  | dev |  | 927.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 41 minutes
- 2026-09-03 PASS 38 minutes
- 2026-09-04 PASS 42 minutes
- 2026-09-05 PASS 37 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 40 minutes
- 2026-09-08 PASS 36 minutes
- 2026-09-09 PASS 44 minutes
- 2026-09-10

### Error 2026-09-10T00:57:57+00:00
```
2026-09-10T00:57:57.6633452Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-10T00:57:57.6635185Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-3756823188023199219
2026-09-10T00:57:57.6636456Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-8418123408420582243
2026-09-10T00:57:57.6637287Z 2026/09/10 00:40:51 [DEBUG] Waiting for state to become: [IDLE]
2026-09-10T00:57:57.6637862Z 2026/09/10 00:43:51 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6638372Z 2026/09/10 00:44:51 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6638868Z 2026/09/10 00:45:02 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6639359Z 2026/09/10 00:46:02 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6639841Z 2026/09/10 00:46:12 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6640328Z 2026/09/10 00:47:12 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6640815Z 2026/09/10 00:47:22 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6641300Z 2026/09/10 00:48:23 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6641785Z 2026/09/10 00:48:33 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6642270Z 2026/09/10 00:49:33 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6642754Z 2026/09/10 00:49:43 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6643563Z 2026/09/10 00:50:43 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6644070Z 2026/09/10 00:50:54 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6644569Z 2026/09/10 00:51:54 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6645056Z 2026/09/10 00:52:04 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6645493Z 2026/09/10 00:53:04 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6645849Z 2026/09/10 00:53:15 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6646218Z 2026/09/10 00:54:15 [TRACE] Waiting 10s before next try
2026-09-10T00:57:57.6646589Z 2026/09/10 00:54:25 [TRACE] Waiting 1m0s before next try
2026-09-10T00:57:57.6647022Z 2026/09/10 00:55:25 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-10T00:57:57.6647464Z     resource_test.go:33: 
2026-09-10T00:57:57.6648631Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-10T00:57:57.6651103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-10T00:57:57.6652001Z         	Error:      	Received unexpected error:
2026-09-10T00:57:57.6653503Z         	            	sample dataset load 6aa1fffd4ab31ba345271d51 failed for cluster 6aa1fc8f5b8d9510e8900b11:test-acc-tf-c-8418123408420582243
2026-09-10T00:57:57.6654493Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-10T00:57:57.6655213Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (938.20s)
```

- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T01:42:10+00:00
```
2026-09-11T01:42:10.0779055Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-11T01:42:10.0782245Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-5262838194179356464
2026-09-11T01:42:10.0783276Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-1613056599515335187
2026-09-11T01:42:10.0783946Z 2026/09/11 00:41:39 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T01:42:10.0784380Z 2026/09/11 00:44:40 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0784774Z 2026/09/11 00:45:40 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0785174Z 2026/09/11 00:45:50 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0785553Z 2026/09/11 00:46:50 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0785931Z 2026/09/11 00:47:01 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0786318Z 2026/09/11 00:48:01 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0786689Z 2026/09/11 00:48:11 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0787050Z 2026/09/11 00:49:11 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0787425Z 2026/09/11 00:49:21 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0787799Z 2026/09/11 00:50:22 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0788172Z 2026/09/11 00:50:32 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0788556Z 2026/09/11 00:51:32 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0788954Z 2026/09/11 00:51:42 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0789332Z 2026/09/11 00:52:42 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0789704Z 2026/09/11 00:52:53 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0790438Z 2026/09/11 00:53:53 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0790887Z 2026/09/11 00:54:03 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0791260Z 2026/09/11 00:55:03 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0791626Z 2026/09/11 00:55:13 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0791990Z 2026/09/11 00:56:14 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0792368Z 2026/09/11 00:56:24 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0792740Z 2026/09/11 00:57:24 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0793113Z 2026/09/11 00:57:34 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0793665Z 2026/09/11 00:58:35 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0794047Z 2026/09/11 00:58:45 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0794434Z 2026/09/11 00:59:45 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0794810Z 2026/09/11 00:59:55 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0795179Z 2026/09/11 01:00:56 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0795588Z 2026/09/11 01:01:06 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0795958Z 2026/09/11 01:02:06 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0796331Z 2026/09/11 01:02:16 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0796714Z 2026/09/11 01:03:16 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0797098Z 2026/09/11 01:03:26 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0797488Z 2026/09/11 01:04:27 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0797865Z 2026/09/11 01:04:37 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0798243Z 2026/09/11 01:05:37 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0798614Z 2026/09/11 01:05:47 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0798982Z 2026/09/11 01:06:47 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0799355Z 2026/09/11 01:06:57 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0799728Z 2026/09/11 01:07:58 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0800329Z 2026/09/11 01:08:08 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0800703Z 2026/09/11 01:09:08 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0801077Z 2026/09/11 01:09:18 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0801447Z 2026/09/11 01:10:19 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0801944Z 2026/09/11 01:10:29 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0802315Z 2026/09/11 01:11:29 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0802684Z 2026/09/11 01:11:39 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0803064Z 2026/09/11 01:12:39 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0803433Z 2026/09/11 01:12:49 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0803798Z 2026/09/11 01:13:50 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0804170Z 2026/09/11 01:14:00 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0804538Z 2026/09/11 01:15:00 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0804906Z 2026/09/11 01:15:10 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0805271Z 2026/09/11 01:16:10 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0805640Z 2026/09/11 01:16:21 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0806009Z 2026/09/11 01:17:21 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0806385Z 2026/09/11 01:17:31 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0806750Z 2026/09/11 01:18:31 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0807120Z 2026/09/11 01:18:41 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0807495Z 2026/09/11 01:19:42 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0807864Z 2026/09/11 01:19:52 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0808230Z 2026/09/11 01:20:52 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0808601Z 2026/09/11 01:21:02 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0808969Z 2026/09/11 01:22:02 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0809343Z 2026/09/11 01:22:13 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0809710Z 2026/09/11 01:23:13 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0810316Z 2026/09/11 01:23:23 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0810693Z 2026/09/11 01:24:23 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0811111Z 2026/09/11 01:24:33 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0811494Z 2026/09/11 01:25:33 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0811874Z 2026/09/11 01:25:44 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0812382Z 2026/09/11 01:26:44 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0812757Z 2026/09/11 01:26:54 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0813130Z 2026/09/11 01:27:54 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0822000Z 2026/09/11 01:28:04 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0822710Z 2026/09/11 01:29:05 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0823215Z 2026/09/11 01:29:15 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0823614Z 2026/09/11 01:30:15 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0824013Z 2026/09/11 01:30:25 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0824420Z 2026/09/11 01:31:25 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0824810Z 2026/09/11 01:31:35 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0825193Z 2026/09/11 01:32:36 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0825559Z 2026/09/11 01:32:46 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0825937Z 2026/09/11 01:33:46 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0826309Z 2026/09/11 01:33:56 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0826684Z 2026/09/11 01:34:56 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0827052Z 2026/09/11 01:35:06 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0827427Z 2026/09/11 01:36:07 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0827802Z 2026/09/11 01:36:17 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0828173Z 2026/09/11 01:37:17 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0828536Z 2026/09/11 01:37:27 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0829075Z 2026/09/11 01:38:27 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0829454Z 2026/09/11 01:38:37 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0829823Z 2026/09/11 01:39:38 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0830429Z 2026/09/11 01:39:48 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0830825Z 2026/09/11 01:40:48 [TRACE] Waiting 10s before next try
2026-09-11T01:42:10.0831200Z 2026/09/11 01:40:58 [TRACE] Waiting 1m0s before next try
2026-09-11T01:42:10.0831601Z 2026/09/11 01:41:39 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T01:42:10.0832055Z 2026/09/11 01:41:39 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T01:42:10.0832600Z     cloud_backup_collection_restore_fixture.go:83: 
2026-09-11T01:42:10.0833726Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T01:42:10.0835661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T01:42:10.0837806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:110
2026-09-11T01:42:10.0840218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:83
2026-09-11T01:42:10.0841519Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:78
2026-09-11T01:42:10.0842423Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:69
2026-09-11T01:42:10.0844227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:81
2026-09-11T01:42:10.0846492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-11T01:42:10.0847426Z         	Error:      	Received unexpected error:
2026-09-11T01:42:10.0848651Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T01:42:10.0849767Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-11T01:42:10.0850766Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1613056599515335187
2026-09-11T01:42:10.0851432Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (3604.23s)
```

  - FAIL 16 minutes

### Error 2026-09-11T07:00:33+00:00
```
2026-09-11T07:00:33.3422635Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-11T07:00:33.3424475Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-8663362011220283019
2026-09-11T07:00:33.3426076Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-2068970145531856742
2026-09-11T07:00:33.3426772Z 2026/09/11 06:40:50 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T07:00:33.3427184Z 2026/09/11 06:43:51 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3427564Z 2026/09/11 06:44:51 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3427937Z 2026/09/11 06:45:01 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3428295Z 2026/09/11 06:46:02 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3428661Z 2026/09/11 06:46:12 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3429024Z 2026/09/11 06:47:12 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3429384Z 2026/09/11 06:47:23 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3429734Z 2026/09/11 06:48:23 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3430102Z 2026/09/11 06:48:33 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3430463Z 2026/09/11 06:49:34 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3430825Z 2026/09/11 06:49:44 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3431333Z 2026/09/11 06:50:45 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3431698Z 2026/09/11 06:50:56 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3432059Z 2026/09/11 06:51:56 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3432420Z 2026/09/11 06:52:06 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3432778Z 2026/09/11 06:53:07 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3433146Z 2026/09/11 06:53:17 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3433511Z 2026/09/11 06:54:17 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3433870Z 2026/09/11 06:54:28 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3434222Z 2026/09/11 06:55:28 [TRACE] Waiting 10s before next try
2026-09-11T07:00:33.3434583Z 2026/09/11 06:55:38 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:33.3435147Z 2026/09/11 06:56:39 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-11T07:00:33.3435572Z     resource_test.go:33: 
2026-09-11T07:00:33.3436615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-11T07:00:33.3438732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-11T07:00:33.3439562Z         	Error:      	Received unexpected error:
2026-09-11T07:00:33.3440710Z         	            	sample dataset load 6aa3a627f7fcc4bbebf776e3 failed for cluster 6aa3a26ff7fcc4bbebf4b443:test-acc-tf-c-2068970145531856742
2026-09-11T07:00:33.3441876Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-11T07:00:33.3442560Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (1012.41s)
```

- 2026-09-12 PASS 43 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 42 minutes
- 2026-09-15 PASS 43 minutes
- 2026-09-16 PASS 47 minutes
- 2026-09-17 PASS 42 minutes
- 2026-09-18 PASS 48 minutes
- 2026-09-19

### Error 2026-09-19T01:12:23+00:00
```
2026-09-19T01:12:23.8549970Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-19T01:12:23.8551540Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-3179238357183790170
2026-09-19T01:12:23.8552800Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-6290566587006395894
2026-09-19T01:12:23.8553535Z 2026/09/19 00:41:17 [DEBUG] Waiting for state to become: [IDLE]
2026-09-19T01:12:23.8554033Z 2026/09/19 00:44:17 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8554494Z 2026/09/19 00:45:18 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8554939Z 2026/09/19 00:45:28 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8555383Z 2026/09/19 00:46:28 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8555817Z 2026/09/19 00:46:38 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8556251Z 2026/09/19 00:47:38 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8556688Z 2026/09/19 00:47:49 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8557169Z 2026/09/19 00:48:49 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8557806Z 2026/09/19 00:48:59 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8558385Z 2026/09/19 00:49:59 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8558827Z 2026/09/19 00:50:09 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8559273Z 2026/09/19 00:51:10 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8559713Z 2026/09/19 00:51:20 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8560145Z 2026/09/19 00:52:20 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8560584Z 2026/09/19 00:52:30 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8561020Z 2026/09/19 00:53:31 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8561453Z 2026/09/19 00:53:41 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8561878Z 2026/09/19 00:54:41 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8562316Z 2026/09/19 00:54:51 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8562799Z 2026/09/19 00:55:51 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-19T01:12:23.8563288Z 2026/09/19 00:56:52 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8563714Z 2026/09/19 00:57:52 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8564154Z 2026/09/19 00:58:02 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8564769Z 2026/09/19 00:59:02 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8565207Z 2026/09/19 00:59:12 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8565639Z 2026/09/19 01:00:13 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8566079Z 2026/09/19 01:00:23 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8566521Z 2026/09/19 01:01:23 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8566961Z 2026/09/19 01:01:33 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8567393Z 2026/09/19 01:02:33 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8568103Z 2026/09/19 01:02:43 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8568760Z 2026/09/19 01:03:44 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8569421Z 2026/09/19 01:03:54 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8570058Z 2026/09/19 01:04:54 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8570728Z 2026/09/19 01:05:04 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8571253Z 2026/09/19 01:06:04 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8571689Z 2026/09/19 01:06:14 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8572121Z 2026/09/19 01:07:14 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8572549Z 2026/09/19 01:07:25 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8572981Z 2026/09/19 01:08:25 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8573415Z 2026/09/19 01:08:35 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8573847Z 2026/09/19 01:09:35 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8574272Z 2026/09/19 01:09:45 [TRACE] Waiting 1m0s before next try
2026-09-19T01:12:23.8574699Z 2026/09/19 01:10:45 [TRACE] Waiting 10s before next try
2026-09-19T01:12:23.8575297Z 2026/09/19 01:10:51 [WARN] WaitForState timeout after 15m0s
2026-09-19T01:12:23.8575833Z 2026/09/19 01:10:51 [WARN] WaitForState starting 30s refresh grace period
2026-09-19T01:12:23.8576346Z     resource_test.go:33: 
2026-09-19T01:12:23.8577811Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-19T01:12:23.8580346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-19T01:12:23.8581362Z         	Error:      	Received unexpected error:
2026-09-19T01:12:23.8582542Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:12:23.8583520Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-19T01:12:23.8584350Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (1779.24s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 43 minutes
- 2026-09-22 PASS 48 minutes
- 2026-09-23
  - FAIL 18 minutes

### Error 2026-09-23T01:01:09+00:00
```
2026-09-23T01:01:09.9813969Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-23T01:01:09.9815297Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-547395292027849473
2026-09-23T01:01:09.9816269Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-3819265740081751432
2026-09-23T01:01:09.9816773Z 2026/09/23 00:40:17 [DEBUG] Waiting for state to become: [IDLE]
2026-09-23T01:01:09.9817126Z 2026/09/23 00:43:18 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9817445Z 2026/09/23 00:44:18 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9817750Z 2026/09/23 00:44:28 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9818045Z 2026/09/23 00:45:29 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9818350Z 2026/09/23 00:45:39 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9818648Z 2026/09/23 00:46:39 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9818944Z 2026/09/23 00:46:50 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9819234Z 2026/09/23 00:47:50 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9819538Z 2026/09/23 00:48:00 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9820038Z 2026/09/23 00:49:01 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9820346Z 2026/09/23 00:49:11 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9820642Z 2026/09/23 00:50:12 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9820940Z 2026/09/23 00:50:22 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9821233Z 2026/09/23 00:51:22 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9821526Z 2026/09/23 00:51:32 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9821815Z 2026/09/23 00:52:33 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9822109Z 2026/09/23 00:52:43 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9822444Z 2026/09/23 00:53:44 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-23T01:01:09.9822779Z 2026/09/23 00:54:44 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9823069Z 2026/09/23 00:55:45 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9823370Z 2026/09/23 00:55:55 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9823824Z 2026/09/23 00:56:55 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9824118Z 2026/09/23 00:57:06 [TRACE] Waiting 1m0s before next try
2026-09-23T01:01:09.9824407Z 2026/09/23 00:58:06 [TRACE] Waiting 10s before next try
2026-09-23T01:01:09.9824715Z     resource_test.go:33: 
2026-09-23T01:01:09.9825636Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T01:01:09.9827404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-23T01:01:09.9828111Z         	Error:      	Received unexpected error:
2026-09-23T01:01:09.9829597Z         	            	sample dataset load 6ab32318aad6f205c425e62b failed for cluster 6ab31feed27ba93df641b7f7:test-acc-tf-c-3819265740081751432: Target cluster does not have enough free space to import dataset
2026-09-23T01:01:09.9830775Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-23T01:01:09.9831340Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (1082.87s)
```

  - FAIL 15 minutes

### Error 2026-09-23T08:42:35+00:00
```
2026-09-23T08:42:35.6550370Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-23T08:42:35.6552113Z     cloud_backup_collection_restore_fixture.go:83: Creating execution project (1): test-acc-tf-p-1734951521813786288
2026-09-23T08:42:35.6553077Z     cloud_backup_collection_restore_fixture.go:83: Creating execution cluster: test-acc-tf-c-7891289760318804086
2026-09-23T08:42:35.6553690Z 2026/09/23 08:25:39 [DEBUG] Waiting for state to become: [IDLE]
2026-09-23T08:42:35.6554123Z 2026/09/23 08:28:40 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6554517Z 2026/09/23 08:29:40 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6554908Z 2026/09/23 08:29:50 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6555274Z 2026/09/23 08:30:51 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6555641Z 2026/09/23 08:31:01 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6556048Z 2026/09/23 08:32:01 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6556413Z 2026/09/23 08:32:11 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6556770Z 2026/09/23 08:33:11 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6557148Z 2026/09/23 08:33:21 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6557512Z 2026/09/23 08:34:22 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6557874Z 2026/09/23 08:34:32 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6558229Z 2026/09/23 08:35:32 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6558587Z 2026/09/23 08:35:42 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6558957Z 2026/09/23 08:36:42 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6559524Z 2026/09/23 08:36:53 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6559882Z 2026/09/23 08:37:53 [TRACE] Waiting 10s before next try
2026-09-23T08:42:35.6560252Z 2026/09/23 08:38:03 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6560664Z 2026/09/23 08:39:03 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-23T08:42:35.6561089Z 2026/09/23 08:40:03 [TRACE] Waiting 1m0s before next try
2026-09-23T08:42:35.6561484Z     resource_test.go:33: 
2026-09-23T08:42:35.6562618Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T08:42:35.6564869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-09-23T08:42:35.6565961Z         	Error:      	Received unexpected error:
2026-09-23T08:42:35.6567755Z         	            	sample dataset load 6ab39027f8a29abe235ba221 failed for cluster 6ab38d01aa941871fb3a5df3:test-acc-tf-c-7891289760318804086: Target cluster does not have enough free space to import dataset
2026-09-23T08:42:35.6568959Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-09-23T08:42:35.6569929Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (927.14s)
```

- 2026-09-24 PASS 52 minutes
- 2026-09-25 PASS 43 minutes
- 2026-09-26 PASS 43 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 42 minutes
- 2026-09-29 PASS 36 minutes
- 2026-09-30 PASS 39 minutes
- 2026-10-01 PASS 32 minutes
- 2026-10-02 PASS 34 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 32 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 33 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 32 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 34 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 37 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 35 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
