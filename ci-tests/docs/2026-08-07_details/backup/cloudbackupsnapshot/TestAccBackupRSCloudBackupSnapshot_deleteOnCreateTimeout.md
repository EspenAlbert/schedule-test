# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 28 minutes
- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 24 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 20 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4698179Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-07-21T00:53:51.4698857Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-2221042574921733197
2026-07-21T00:53:51.4699372Z     resource_test.go:106: 
2026-07-21T00:53:51.4700326Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4702265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4704082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4705955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4707874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-07-21T00:53:51.4709132Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4709685Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4711664Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4712965Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-07-21T00:53:51.4714820Z         	Messages:   	Project creation failed: test-acc-tf-p-2221042574921733197, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4716085Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (68.66s)
```

- 2026-07-22 PASS 40 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8725277Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-07-23T00:50:22.8725944Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-2383647501035542246
2026-07-23T00:50:22.8726468Z     resource_test.go:106: 
2026-07-23T00:50:22.8727660Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8729477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8731286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8732995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8734890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-07-23T00:50:22.8736125Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8736652Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8738828Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8740004Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-07-23T00:50:22.8741859Z         	Messages:   	Project creation failed: test-acc-tf-p-2383647501035542246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8743143Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (61.82s)
```

- 2026-07-24 PASS 32 minutes
- 2026-07-25 PASS 28 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 25 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 22 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 20 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
