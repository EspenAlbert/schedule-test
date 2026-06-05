# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.05s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.10s
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-28 01:00](#error-2026-05-28t0100340000) |  | dev | flaky_500 | 36.02s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 40 minutes
- 2026-05-08 PASS 25 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1090047Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-05-09T01:25:50.1090666Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-865381075609018986
2026-05-09T01:25:50.1091165Z     resource_test.go:25: 
2026-05-09T01:25:50.1092088Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1094334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1096245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1098028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1099991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-05-09T01:25:50.1101247Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1101768Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1103748Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1105100Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-05-09T01:25:50.1107075Z         	Messages:   	Project creation failed: test-acc-tf-p-865381075609018986, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1116422Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (79.49s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 31 minutes
- 2026-05-12 PASS 22 minutes
- 2026-05-13 PASS 27 minutes
- 2026-05-14 PASS 45 minutes
- 2026-05-15 PASS 25 minutes
- 2026-05-16 PASS 22 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 38 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6970856Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-05-19T01:23:22.6971446Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-8121046915525068214
2026-05-19T01:23:22.6971935Z     resource_test.go:25: 
2026-05-19T01:23:22.6972845Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6974678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6976635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6978606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.6980538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-05-19T01:23:22.6981779Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.6982291Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6984272Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6985358Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-05-19T01:23:22.6987162Z         	Messages:   	Project creation failed: test-acc-tf-p-8121046915525068214, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6988639Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (65.98s)
```

- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 27 minutes
- 2026-05-22 PASS 46 minutes
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7516739Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-05-23T01:25:37.7517475Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6132193126862281999
2026-05-23T01:25:37.7517994Z     resource_test.go:25: 
2026-05-23T01:25:37.7518952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7520991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7522754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7524400Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:25:37.7526214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-05-23T01:25:37.7527455Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:25:37.7528273Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7530501Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7531573Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-05-23T01:25:37.7533284Z         	Messages:   	Project creation failed: test-acc-tf-p-6132193126862281999, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7534430Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (63.06s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 30 minutes
- 2026-05-26 PASS 22 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9235331Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-05-28T01:00:34.9235951Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6088632391305576104
2026-05-28T01:00:34.9236461Z     resource_test.go:25: 
2026-05-28T01:00:34.9237401Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9239265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9241386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9243180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9245138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-05-28T01:00:34.9246406Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9246950Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9247914Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:00:34.9248590Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-05-28T01:00:34.9249742Z         	Messages:   	Project creation failed: test-acc-tf-p-6088632391305576104, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:00:34.9250563Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (36.15s)
```

- 2026-05-29 PASS 22 minutes
- 2026-05-30 PASS 21 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 31 minutes
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0723915Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-06-02T01:24:48.0724550Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4882922613613543161
2026-06-02T01:24:48.0725060Z     resource_test.go:25: 
2026-06-02T01:24:48.0726145Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0727982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0729808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0731537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-06-02T01:24:48.0733458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-06-02T01:24:48.0734842Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:24:48.0735584Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0737550Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0738669Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-06-02T01:24:48.0740486Z         	Messages:   	Project creation failed: test-acc-tf-p-4882922613613543161, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0741752Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (70.38s)
```

- 2026-06-03 PASS 46 minutes
- 2026-06-04 PASS 54 minutes
- 2026-06-05 PASS 27 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 24 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 23 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
