# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.08s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.03s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.09s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.07s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09
  - PASS 4 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1271572Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-09T01:47:38.1272543Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-3295095703369694305
2026-05-09T01:47:38.1273057Z     resource_test.go:151: 
2026-05-09T01:47:38.1273971Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1275772Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1277578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1279406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1281309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-05-09T01:47:38.1282728Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1283267Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1285207Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1286301Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-09T01:47:38.1288106Z         	Messages:   	Project creation failed: test-acc-tf-p-3295095703369694305, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1289524Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (90.84s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 4 seconds
- 2026-05-15 PASS 4 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.1019505Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-16T01:46:08.1020114Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-1958975469370525747
2026-05-16T01:46:08.1020657Z     resource_test.go:151: 
2026-05-16T01:46:08.1021576Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.1023548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.1025388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.1027227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.1029156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-05-16T01:46:08.1030386Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:46:08.1030914Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.1032892Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1034206Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-16T01:46:08.1036017Z         	Messages:   	Project creation failed: test-acc-tf-p-1958975469370525747, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1037379Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (62.19s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1711100Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-19T02:05:39.1712175Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-1369257324108125088
2026-05-19T02:05:39.1713064Z     resource_test.go:151: 
2026-05-19T02:05:39.1714839Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1718053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1721388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1724844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-19T02:05:39.1728248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-05-19T02:05:39.1730547Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T02:05:39.1731486Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1735182Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1737074Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-19T02:05:39.1740871Z         	Messages:   	Project creation failed: test-acc-tf-p-1369257324108125088, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1743055Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (87.25s)
```

- 2026-05-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 4 seconds
- 2026-05-23 PASS 5 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8808352Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-26T03:14:06.8808980Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-6684011688636936209
2026-05-26T03:14:06.8809491Z     resource_test.go:151: 
2026-05-26T03:14:06.8810420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8812243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8814059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8815898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-26T03:14:06.8818060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-05-26T03:14:06.8819302Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T03:14:06.8819836Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8822136Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8823257Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-26T03:14:06.8825540Z         	Messages:   	Project creation failed: test-acc-tf-p-6684011688636936209, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8826824Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (76.87s)
```

- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5301928Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-28T02:40:17.5302624Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-2204009188692324323
2026-05-28T02:40:17.5303124Z     resource_test.go:151: 
2026-05-28T02:40:17.5304037Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5306049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5308280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5310084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5311970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-05-28T02:40:17.5313183Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:40:17.5313702Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5315630Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5316744Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-05-28T02:40:17.5318963Z         	Messages:   	Project creation failed: test-acc-tf-p-2204009188692324323, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5320228Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (91.71s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30 PASS 6 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5654998Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-06-02T01:54:34.5655611Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-2861199830137341900
2026-06-02T01:54:34.5656101Z     resource_test.go:151: 
2026-06-02T01:54:34.5656964Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5658628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5660342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5662007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5663815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-06-02T01:54:34.5665038Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5665568Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5667315Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5668342Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-06-02T01:54:34.5669976Z         	Messages:   	Project creation failed: test-acc-tf-p-2861199830137341900, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5671145Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (81.96s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 seconds
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
