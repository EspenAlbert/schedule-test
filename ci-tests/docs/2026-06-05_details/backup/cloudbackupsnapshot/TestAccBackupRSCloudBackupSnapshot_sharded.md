# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.09s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.03s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 45 minutes
- 2026-05-08 PASS 38 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1117120Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-09T01:25:50.1117786Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-7145636469938726530
2026-05-09T01:25:50.1118312Z     resource_test.go:73: 
2026-05-09T01:25:50.1119272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1121178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1123066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1125350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-05-09T01:25:50.1126215Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1128212Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1129347Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-09T01:25:50.1131247Z         	Messages:   	Project creation failed: test-acc-tf-p-7145636469938726530, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1132546Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (67.14s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 36 minutes
- 2026-05-12 PASS 29 minutes
- 2026-05-13 PASS 34 minutes
- 2026-05-14 PASS 48 minutes
- 2026-05-15 PASS 31 minutes
- 2026-05-16 PASS 26 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 55 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6989066Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-19T01:23:22.6989663Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-7548503443486095140
2026-05-19T01:23:22.6990148Z     resource_test.go:73: 
2026-05-19T01:23:22.6991055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6992882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6994700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6996659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-05-19T01:23:22.6997471Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6999868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7000967Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-19T01:23:22.7002783Z         	Messages:   	Project creation failed: test-acc-tf-p-7548503443486095140, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7004020Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (62.52s)
```

- 2026-05-20 PASS 34 minutes
- 2026-05-21 PASS 30 minutes
- 2026-05-22 PASS 47 minutes
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7534853Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-23T01:25:37.7535435Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-977135220328727504
2026-05-23T01:25:37.7535911Z     resource_test.go:73: 
2026-05-23T01:25:37.7536796Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7538516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7540538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7542431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-05-23T01:25:37.7543241Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7545128Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7546159Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-23T01:25:37.7547851Z         	Messages:   	Project creation failed: test-acc-tf-p-977135220328727504, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7548987Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (82.93s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 34 minutes
- 2026-05-26 PASS 30 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9251288Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-28T01:00:34.9251923Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-6035774163939548767
2026-05-28T01:00:34.9252433Z     resource_test.go:73: 
2026-05-28T01:00:34.9253364Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9255352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9257201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9259172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-05-28T01:00:34.9260012Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9262280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9263395Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-05-28T01:00:34.9265354Z         	Messages:   	Project creation failed: test-acc-tf-p-6035774163939548767, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9266640Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (83.27s)
```

- 2026-05-29 PASS 33 minutes
- 2026-05-30 PASS 24 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 50 minutes
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0742208Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-06-02T01:24:48.0742833Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-2052338640208958746
2026-06-02T01:24:48.0743350Z     resource_test.go:73: 
2026-06-02T01:24:48.0744284Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0746250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0748080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0750029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-06-02T01:24:48.0750875Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0752826Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0753955Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-06-02T01:24:48.0755869Z         	Messages:   	Project creation failed: test-acc-tf-p-2052338640208958746, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0757131Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (62.25s)
```

- 2026-06-03 PASS 46 minutes
- 2026-06-04 PASS 57 minutes
- 2026-06-05 PASS 35 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 33 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 33 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 33 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 31 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
