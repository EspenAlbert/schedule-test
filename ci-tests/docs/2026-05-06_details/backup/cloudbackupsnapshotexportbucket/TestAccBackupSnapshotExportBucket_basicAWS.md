# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-14 01:23](#error-2026-04-14t0123130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-04-21 01:22](#error-2026-04-21t0122160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.10s
[2026-05-05 01:30](#error-2026-05-05t0130340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 58 seconds
- 2026-04-08 PASS 43 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 44 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 40 seconds
- 2026-04-14

### Error 2026-04-14T01:23:13+00:00
```
2026-04-14T01:23:13.8564897Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-04-14T01:23:13.8565651Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-675965655446303731
2026-04-14T01:23:13.8566561Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-04-14T01:23:13.8567572Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T01:23:13.8569362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T01:23:13.8571290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T01:23:13.8573661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-04-14T01:23:13.8576612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-04-14T01:23:13.8578178Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-14T01:23:13.8578694Z         	Error:      	Received unexpected error:
2026-04-14T01:23:13.8580614Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T01:23:13.8581683Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-04-14T01:23:13.8583453Z         	Messages:   	Project creation failed: test-acc-tf-p-675965655446303731, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T01:23:13.8584643Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (61.67s)
```

- 2026-04-15 PASS 42 seconds
- 2026-04-16 PASS 52 seconds
- 2026-04-17 PASS 43 seconds
- 2026-04-18 PASS 50 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 42 seconds
- 2026-04-21

### Error 2026-04-21T01:22:16+00:00
```
2026-04-21T01:22:16.2551466Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-04-21T01:22:16.2600160Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-1914029084708201962
2026-04-21T01:22:16.2600949Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-04-21T01:22:16.2601969Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T01:22:16.2603776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-21T01:22:16.2605563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-21T01:22:16.2608222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-04-21T01:22:16.2610796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-04-21T01:22:16.2612442Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-21T01:22:16.2612956Z         	Error:      	Received unexpected error:
2026-04-21T01:22:16.2614873Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:16.2615998Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-04-21T01:22:16.2618048Z         	Messages:   	Project creation failed: test-acc-tf-p-1914029084708201962, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:16.2619276Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (73.98s)
```

- 2026-04-22 PASS 39 seconds
- 2026-04-23 PASS 51 seconds
- 2026-04-24 PASS 45 seconds
- 2026-04-25 PASS 54 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 45 seconds
- 2026-04-28 PASS 50 seconds
- 2026-04-29 PASS 39 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 41 seconds
- 2026-05-02 PASS 51 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 seconds
- 2026-05-05

### Error 2026-05-05T01:30:34+00:00
```
2026-05-05T01:30:34.0796918Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-05-05T01:30:34.0797772Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-2604973433029893003
2026-05-05T01:30:34.0798488Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-05-05T01:30:34.0799497Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:30:34.0801488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:30:34.0803303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:30:34.0805686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-05-05T01:30:34.0808550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-05-05T01:30:34.0809970Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T01:30:34.0810495Z         	Error:      	Received unexpected error:
2026-05-05T01:30:34.0812444Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:30:34.0813532Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-05-05T01:30:34.0815455Z         	Messages:   	Project creation failed: test-acc-tf-p-2604973433029893003, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:30:34.0816989Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (71.51s)
```

- 2026-05-06 PASS 45 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 39 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 45 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 39 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 39 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 41 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 44 seconds
- 2026-05-04 PASS 39 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 40 seconds
