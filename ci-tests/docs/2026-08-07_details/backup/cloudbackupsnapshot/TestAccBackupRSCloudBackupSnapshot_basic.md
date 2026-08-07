# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 02:12](#error-2026-07-16t0212020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s
[2026-07-21 00:53](#error-2026-07-21t0053510000) |  | dev | flaky_500 | 41.05s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 35 minutes
- 2026-07-10 PASS 48 minutes
- 2026-07-11 PASS 22 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 40 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 34 minutes
- 2026-07-16

### Error 2026-07-16T02:12:02+00:00
```
2026-07-16T02:12:02.4043458Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-07-16T02:12:02.4044387Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-3848334083739448353
2026-07-16T02:12:02.4045029Z     resource_test.go:25: 
2026-07-16T02:12:02.4046500Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T02:12:02.4048828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T02:12:02.4051129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T02:12:02.4053278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-16T02:12:02.4055527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-07-16T02:12:02.4057247Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T02:12:02.4057860Z         	Error:      	Received unexpected error:
2026-07-16T02:12:02.4060143Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T02:12:02.4061428Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-07-16T02:12:02.4063409Z         	Messages:   	Project creation failed: test-acc-tf-p-3848334083739448353, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T02:12:02.4064660Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (65.02s)
```

- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 23 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4667126Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-07-21T00:53:51.4667762Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7702178121602543127
2026-07-21T00:53:51.4668274Z     resource_test.go:25: 
2026-07-21T00:53:51.4669227Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4671191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4673136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4674882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4676790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-07-21T00:53:51.4678039Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4678585Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4679529Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4680217Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-07-21T00:53:51.4681354Z         	Messages:   	Project creation failed: test-acc-tf-p-7702178121602543127, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4682260Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (41.45s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8685462Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-07-23T00:50:22.8686524Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-325101486598045640
2026-07-23T00:50:22.8687596Z     resource_test.go:25: 
2026-07-23T00:50:22.8689236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8692569Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8695904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8698476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8700392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-07-23T00:50:22.8702119Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8702668Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8704617Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8705708Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-07-23T00:50:22.8707730Z         	Messages:   	Project creation failed: test-acc-tf-p-325101486598045640, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8709384Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (61.44s)
```

- 2026-07-24 PASS 41 minutes
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 56 minutes
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 21 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 minutes
- 2026-08-04 PASS 22 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 20 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 26 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 32 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 23 minutes
  - PASS 27 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
