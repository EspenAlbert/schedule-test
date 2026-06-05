# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.04s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 35 minutes
- 2026-05-08 PASS 23 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1133046Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-09T01:25:50.1133716Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-6482109644966448535
2026-05-09T01:25:50.1134514Z     resource_test.go:106: 
2026-05-09T01:25:50.1135462Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1137349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1139418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1141201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1143176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-05-09T01:25:50.1144744Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1145278Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1147295Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1148592Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-09T01:25:50.1150493Z         	Messages:   	Project creation failed: test-acc-tf-p-6482109644966448535, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1151830Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (70.56s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 32 minutes
- 2026-05-15 PASS 19 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 33 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.7004501Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-19T01:23:22.7005158Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-6354174688184466715
2026-05-19T01:23:22.7005659Z     resource_test.go:106: 
2026-05-19T01:23:22.7006576Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.7008697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.7010686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.7012447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.7014385Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-05-19T01:23:22.7015618Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.7016136Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.7018330Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7019499Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-19T01:23:22.7021357Z         	Messages:   	Project creation failed: test-acc-tf-p-6354174688184466715, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7022636Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (113.43s)
```

- 2026-05-20 PASS 21 minutes
- 2026-05-21 PASS 23 minutes
- 2026-05-22 PASS 32 minutes
- 2026-05-23 PASS 24 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 20 minutes
- 2026-05-26 PASS 20 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9267150Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-28T01:00:34.9267829Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-1703563068209400625
2026-05-28T01:00:34.9268348Z     resource_test.go:106: 
2026-05-28T01:00:34.9269299Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9271378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9273233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9275004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9276955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-05-28T01:00:34.9278208Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9278747Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9280747Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9282038Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-05-28T01:00:34.9283932Z         	Messages:   	Project creation failed: test-acc-tf-p-1703563068209400625, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9285241Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (63.94s)
```

- 2026-05-29 PASS 18 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 25 minutes
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0757785Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-06-02T01:24:48.0758463Z     resource_test.go:106: Creating execution project (1): test-acc-tf-p-3858004629743380724
2026-06-02T01:24:48.0758984Z     resource_test.go:106: 
2026-06-02T01:24:48.0759908Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0761726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0763560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0765427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-06-02T01:24:48.0767345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:106
2026-06-02T01:24:48.0768594Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:24:48.0769135Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0771194Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0772385Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-06-02T01:24:48.0774241Z         	Messages:   	Project creation failed: test-acc-tf-p-3858004629743380724, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0775732Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (78.00s)
```

- 2026-06-03 PASS 46 minutes
- 2026-06-04 PASS 48 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 21 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 20 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 21 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
