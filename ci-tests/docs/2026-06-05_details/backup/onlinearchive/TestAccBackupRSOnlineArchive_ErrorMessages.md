# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-05-28 01:18](#error-2026-05-28t0118420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-05-30 01:27](#error-2026-05-30t0127260000) |  | dev | flaky_500 | 57.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 40 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1283852Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-09T01:25:50.1284703Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-2980034304862946317
2026-05-09T01:25:50.1285212Z     resource_test.go:213: 
2026-05-09T01:25:50.1286150Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1288020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1289893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1291723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1293633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-05-09T01:25:50.1295060Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1295715Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1297713Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1298831Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-09T01:25:50.1300679Z         	Messages:   	Project creation failed: test-acc-tf-p-2980034304862946317, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1301963Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (65.12s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 35 minutes
- 2026-05-12 PASS 22 minutes
- 2026-05-13 PASS 27 minutes
- 2026-05-14 PASS 39 minutes
- 2026-05-15 PASS 26 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 48 minutes
- 2026-05-19 PASS 16 minutes
- 2026-05-20 PASS 33 minutes
- 2026-05-21 PASS 20 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 19 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 31 minutes
- 2026-05-26 PASS 18 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:18:42+00:00
```
2026-05-28T01:18:42.4320558Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-28T01:18:42.4321463Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-6252519237629780100
2026-05-28T01:18:42.4321984Z     resource_test.go:213: 
2026-05-28T01:18:42.4322920Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:18:42.4324800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:18:42.4326804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:18:42.4328589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:18:42.4330495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-05-28T01:18:42.4331976Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:18:42.4332519Z         	Error:      	Received unexpected error:
2026-05-28T01:18:42.4335451Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4336925Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-28T01:18:42.4339364Z         	Messages:   	Project creation failed: test-acc-tf-p-6252519237629780100, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4341173Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (1.37s)
```

- 2026-05-29 PASS 38 minutes
- 2026-05-30

### Error 2026-05-30T01:27:26+00:00
```
2026-05-30T01:27:26.4229747Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-30T01:27:26.4230841Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-2636605456305041986
2026-05-30T01:27:26.4231761Z     resource_test.go:213: 
2026-05-30T01:27:26.4233636Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:27:26.4237025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:27:26.4240379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:27:26.4243800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:27:26.4247245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-05-30T01:27:26.4249438Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:27:26.4250396Z         	Error:      	Received unexpected error:
2026-05-30T01:27:26.4252128Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:27:26.4253476Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-05-30T01:27:26.4255515Z         	Messages:   	Project creation failed: test-acc-tf-p-2636605456305041986, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:27:26.4256899Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (57.98s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 57 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 37 minutes
- 2026-06-04 PASS 41 minutes
- 2026-06-05 PASS 29 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 17 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
