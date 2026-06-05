# config/customdbrole/TestAccCustomDBRoles_BasicWithTwoActions Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.06s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.05s
[2026-05-26 02:12](#error-2026-05-26t0212160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.03s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 14 seconds
  - PASS 14 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.3937488Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-05-09T00:59:14.3938044Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-3790965113093079426
2026-05-09T00:59:14.3938423Z     resource_test.go:44: 
2026-05-09T00:59:14.3939211Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:59:14.3940732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:59:14.3942299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:59:14.3969649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-05-09T00:59:14.3971214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-05-09T00:59:14.3972115Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T00:59:14.3972527Z         	Error:      	Received unexpected error:
2026-05-09T00:59:14.3974966Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.3975889Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-05-09T00:59:14.3977242Z         	Messages:   	Project creation failed: test-acc-tf-p-3790965113093079426, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.3978335Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (70.56s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 14 seconds
- 2026-05-12 PASS 18 seconds
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 14 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5684010Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-05-16T01:00:42.5684583Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-2923831417350852343
2026-05-16T01:00:42.5685056Z     resource_test.go:44: 
2026-05-16T01:00:42.5686197Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5688032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5689856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5691860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-05-16T01:00:42.5693762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-05-16T01:00:42.5694949Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:00:42.5695654Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5697711Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5698795Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-05-16T01:00:42.5700615Z         	Messages:   	Project creation failed: test-acc-tf-p-2923831417350852343, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5701839Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (120.61s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 13 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 14 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7163172Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-05-21T01:07:04.7163756Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-2212420780285980642
2026-05-21T01:07:04.7164237Z     resource_test.go:44: 
2026-05-21T01:07:04.7165143Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:07:04.7166971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:07:04.7168804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:07:04.7170782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-05-21T01:07:04.7172674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-05-21T01:07:04.7173870Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:07:04.7174379Z         	Error:      	Received unexpected error:
2026-05-21T01:07:04.7176343Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7177411Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-05-21T01:07:04.7179326Z         	Messages:   	Project creation failed: test-acc-tf-p-2212420780285980642, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7180694Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (67.51s)
```

- 2026-05-22 PASS 13 seconds
- 2026-05-23 PASS 14 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 14 seconds
- 2026-05-26

### Error 2026-05-26T02:12:16+00:00
```
2026-05-26T02:12:16.0335768Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-05-26T02:12:16.0336782Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-1480052614956250062
2026-05-26T02:12:16.0337654Z     resource_test.go:44: 
2026-05-26T02:12:16.0339286Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:12:16.0342974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:12:16.0346535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:12:16.0350067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-05-26T02:12:16.0353920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-05-26T02:12:16.0356137Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:12:16.0357054Z         	Error:      	Received unexpected error:
2026-05-26T02:12:16.0360712Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0362583Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-05-26T02:12:16.0366015Z         	Messages:   	Project creation failed: test-acc-tf-p-1480052614956250062, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0368120Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (78.29s)
```

- 2026-05-27 PASS 14 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7564523Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-05-28T01:01:56.7565088Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-508039317125479182
2026-05-28T01:01:56.7565557Z     resource_test.go:44: 
2026-05-28T01:01:56.7566451Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.7568251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.7570056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.7572014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-05-28T01:01:56.7574013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-05-28T01:01:56.7575193Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:56.7575697Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.7577630Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7578687Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-05-28T01:01:56.7580455Z         	Messages:   	Project creation failed: test-acc-tf-p-508039317125479182, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7581764Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (62.90s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30 PASS 15 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02 PASS 14 seconds
- 2026-06-03 PASS 14 seconds
- 2026-06-04 PASS 14 seconds
- 2026-06-05 PASS 13 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 13 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 13 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 13 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
