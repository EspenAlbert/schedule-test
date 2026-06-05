# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-05-27 02:09](#error-2026-05-27t0209270000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6a16429ee9f4601a99027696/cloudProviderAccess/6a1642e1e9f4601a9903d580 | dev | flaky_500 | 41.03s
[2026-05-28 01:00](#error-2026-05-28t0100340000) |  | dev | flaky_500 | 35.09s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS 42 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 40 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 41 seconds
- 2026-05-14 PASS 49 seconds
- 2026-05-15 PASS 41 seconds
- 2026-05-16 PASS 51 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 40 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 41 seconds
- 2026-05-21 PASS 50 seconds
- 2026-05-22 PASS 45 seconds
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7563823Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-05-23T01:25:37.7564573Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-6851706358995001527
2026-05-23T01:25:37.7565270Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-05-23T01:25:37.7566242Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7567957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7569874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7572157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-05-23T01:25:37.7574645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-05-23T01:25:37.7575991Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:25:37.7576504Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7578393Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7579434Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-05-23T01:25:37.7581389Z         	Messages:   	Project creation failed: test-acc-tf-p-6851706358995001527, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7583003Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (65.51s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 40 seconds
- 2026-05-26 PASS 50 seconds
- 2026-05-27

### Error 2026-05-27T02:09:27+00:00
```
2026-05-27T02:09:27.0750379Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-05-27T02:09:27.0752352Z 2026/05/27 01:03:30 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429ee9f4601a99027696/cloudProviderAccess/6a1642e1e9f4601a9903d580 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3684774303049494577). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3684774303049494577], BadRequestDetail:  
2026-05-27T02:09:27.0754087Z 2026/05/27 01:03:30 retrying
2026-05-27T02:09:27.0764954Z   
2026-05-27T02:09:27.0765684Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-27T02:09:27.0766326Z         
2026-05-27T02:09:27.0768023Z         Error: error deleting snapshot export bucket 6a16429ee9f4601a99027696 https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429ee9f4601a99027696/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-27T02:09:27.0769309Z         
2026-05-27T02:09:27.0769676Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (41.33s)
```

- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9286759Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-05-28T01:00:34.9287545Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-7551217128678001340
2026-05-28T01:00:34.9288298Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-05-28T01:00:34.9289328Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9291430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9293285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9295748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-05-28T01:00:34.9298412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-05-28T01:00:34.9299853Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9300399Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9301909Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:00:34.9302617Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-05-28T01:00:34.9303764Z         	Messages:   	Project creation failed: test-acc-tf-p-7551217128678001340, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:00:34.9304595Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (35.85s)
```

- 2026-05-29 PASS 42 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 45 seconds
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0777436Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-06-02T01:24:48.0778359Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-8236811190086815146
2026-06-02T01:24:48.0779401Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-06-02T01:24:48.0780559Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0782567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0784519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0787730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-06-02T01:24:48.0790516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-06-02T01:24:48.0792173Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:24:48.0792853Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0805488Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0806855Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-06-02T01:24:48.0808719Z         	Messages:   	Project creation failed: test-acc-tf-p-8236811190086815146, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0810000Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (64.22s)
```

- 2026-06-03 PASS 39 seconds
- 2026-06-04 PASS 52 seconds
- 2026-06-05 PASS 41 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 45 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 44 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 38 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 45 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
