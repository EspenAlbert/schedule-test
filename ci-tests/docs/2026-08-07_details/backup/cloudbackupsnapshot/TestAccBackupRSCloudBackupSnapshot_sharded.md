# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.03s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 49 minutes
- 2026-07-10 PASS an hour
- 2026-07-11 PASS 27 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 42 minutes
- 2026-07-14 PASS 40 minutes
- 2026-07-15 PASS 35 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 31 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4682716Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-07-21T00:53:51.4683335Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-1083932331620213601
2026-07-21T00:53:51.4683851Z     resource_test.go:73: 
2026-07-21T00:53:51.4684777Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4686580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4688422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4690347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-07-21T00:53:51.4691178Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4693386Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4694640Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-07-21T00:53:51.4696465Z         	Messages:   	Project creation failed: test-acc-tf-p-1083932331620213601, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4697667Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (91.33s)
```

- 2026-07-22 PASS 45 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8709836Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-07-23T00:50:22.8710460Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-4089238442571179548
2026-07-23T00:50:22.8710975Z     resource_test.go:73: 
2026-07-23T00:50:22.8711901Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8713707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8715500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8717710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-07-23T00:50:22.8718558Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8720491Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8721579Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-07-23T00:50:22.8723533Z         	Messages:   	Project creation failed: test-acc-tf-p-4089238442571179548, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8724775Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (62.21s)
```

- 2026-07-24 PASS 53 minutes
- 2026-07-25 PASS 36 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 33 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 28 minutes
- 2026-08-01 PASS 26 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 26 minutes
- 2026-08-04 PASS 30 minutes
- 2026-08-05 PASS 26 minutes
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 31 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 40 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 38 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 27 minutes
  - PASS 31 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 25 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
