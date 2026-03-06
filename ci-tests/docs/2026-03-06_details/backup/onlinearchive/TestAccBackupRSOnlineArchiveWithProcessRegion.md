# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 951.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5328757Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-13T01:30:27.5329352Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-5261768873235512973
2026-02-13T01:30:27.5329826Z     resource_test.go:169: 
2026-02-13T01:30:27.5330935Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5332902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5334766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5336443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5338229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-02-13T01:30:27.5339626Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5340137Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5343516Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5345368Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-13T01:30:27.5347702Z         	Messages:   	Project creation failed: test-acc-tf-p-5261768873235512973, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5349294Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (0.19s)
```

- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 22 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 34 minutes
- 2026-02-20 PASS 20 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 18 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2938025Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-24T01:20:27.2939110Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-8314263089720936141
2026-02-24T01:20:27.2943459Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-24T01:20:27.2945915Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-24T01:20:27.2947628Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:56:40.313996485Z, ProjectID: 699cf73fae2412ce621465fa, Cluster name: test-acc-tf-c-7657425537310143357
2026-02-24T01:20:27.2989425Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-24T01:20:27.2991873Z     resource_test.go:178: Step 1/4 error: Check failed: cluster(699cf73fae2412ce621465fa:test-acc-tf-c-7657425537310143357) loading sample data set error: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.3009864Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest1012030420
2026-02-24T01:20:27.3020825Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (951.06s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 30 minutes
- 2026-02-27 PASS 19 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 18 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 35 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 20 minutes
  - PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 23 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 19 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
