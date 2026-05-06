# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-14 00:52](#error-2026-04-14t0052420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-04-16 00:54](#error-2026-04-16t0054080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-04-18 00:48](#error-2026-04-18t0048110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.06s
[2026-04-23 00:55](#error-2026-04-23t0055000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 30 seconds
- 2026-04-08 PASS 17 seconds
- 2026-04-09 PASS 31 seconds
- 2026-04-10 PASS 17 seconds
- 2026-04-11 PASS 33 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 17 seconds
- 2026-04-14

### Error 2026-04-14T00:52:42+00:00
```
2026-04-14T00:52:42.0869925Z === RUN   TestAccCustomDBRoles_Basic
2026-04-14T00:52:42.0897013Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4063150130486148908
2026-04-14T00:52:42.0921891Z     resource_test.go:40: 
2026-04-14T00:52:42.0948318Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:52:42.1017433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:52:42.1025031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:52:42.1072961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-04-14T00:52:42.1091827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-04-14T00:52:42.1114222Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-14T00:52:42.1131944Z         	Error:      	Received unexpected error:
2026-04-14T00:52:42.1164205Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:52:42.1181390Z         	Test:       	TestAccCustomDBRoles_Basic
2026-04-14T00:52:42.1266680Z         	Messages:   	Project creation failed: test-acc-tf-p-4063150130486148908, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:52:42.1272353Z --- FAIL: TestAccCustomDBRoles_Basic (64.31s)
```

- 2026-04-15 PASS 19 seconds
- 2026-04-16

### Error 2026-04-16T00:54:08+00:00
```
2026-04-16T00:54:08.6202580Z === RUN   TestAccCustomDBRoles_Basic
2026-04-16T00:54:08.6203274Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6204799836846005102
2026-04-16T00:54:08.6203850Z     resource_test.go:40: 
2026-04-16T00:54:08.6205434Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:54:08.6207684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:54:08.6210066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:54:08.6211975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-04-16T00:54:08.6213571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-04-16T00:54:08.6215023Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T00:54:08.6215611Z         	Error:      	Received unexpected error:
2026-04-16T00:54:08.6217611Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:08.6218442Z         	Test:       	TestAccCustomDBRoles_Basic
2026-04-16T00:54:08.6219909Z         	Messages:   	Project creation failed: test-acc-tf-p-6204799836846005102, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:08.6220860Z --- FAIL: TestAccCustomDBRoles_Basic (63.86s)
```

- 2026-04-17 PASS 20 seconds
- 2026-04-18

### Error 2026-04-18T00:48:11+00:00
```
2026-04-18T00:48:11.0350040Z === RUN   TestAccCustomDBRoles_Basic
2026-04-18T00:48:11.0351019Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-1486473699420550134
2026-04-18T00:48:11.0351914Z     resource_test.go:40: 
2026-04-18T00:48:11.0353650Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:48:11.0357043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:48:11.0360667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:48:11.0364327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-04-18T00:48:11.0367860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-04-18T00:48:11.0370249Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-18T00:48:11.0371164Z         	Error:      	Received unexpected error:
2026-04-18T00:48:11.0374768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:48:11.0376555Z         	Test:       	TestAccCustomDBRoles_Basic
2026-04-18T00:48:11.0380170Z         	Messages:   	Project creation failed: test-acc-tf-p-1486473699420550134, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:48:11.0382305Z --- FAIL: TestAccCustomDBRoles_Basic (105.61s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 19 seconds
- 2026-04-21 PASS 33 seconds
- 2026-04-22 PASS 16 seconds
- 2026-04-23

### Error 2026-04-23T00:55:00+00:00
```
2026-04-23T00:55:00.3500018Z === RUN   TestAccCustomDBRoles_Basic
2026-04-23T00:55:00.3500611Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-175239057273259866
2026-04-23T00:55:00.3501099Z     resource_test.go:40: 
2026-04-23T00:55:00.3502020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-23T00:55:00.3503885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-23T00:55:00.3505696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-23T00:55:00.3507554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-04-23T00:55:00.3509801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-04-23T00:55:00.3510995Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-23T00:55:00.3511506Z         	Error:      	Received unexpected error:
2026-04-23T00:55:00.3513471Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:55:00.3514475Z         	Test:       	TestAccCustomDBRoles_Basic
2026-04-23T00:55:00.3516249Z         	Messages:   	Project creation failed: test-acc-tf-p-175239057273259866, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:55:00.3518051Z --- FAIL: TestAccCustomDBRoles_Basic (75.11s)
```

- 2026-04-24 PASS 19 seconds
- 2026-04-25 PASS 45 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 18 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 20 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.7023985Z === RUN   TestAccCustomDBRoles_Basic
2026-04-30T01:01:13.7025078Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-2395508307144205080
2026-04-30T01:01:13.7026031Z     resource_test.go:40: 
2026-04-30T01:01:13.7027899Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.7031302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.7034369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.7037710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-04-30T01:01:13.7041036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-04-30T01:01:13.7043020Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:01:13.7044027Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.7047565Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7049413Z         	Test:       	TestAccCustomDBRoles_Basic
2026-04-30T01:01:13.7052724Z         	Messages:   	Project creation failed: test-acc-tf-p-2395508307144205080, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7054849Z --- FAIL: TestAccCustomDBRoles_Basic (62.92s)
```

- 2026-05-01 PASS 17 seconds
- 2026-05-02 PASS 22 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 seconds
- 2026-05-05 PASS 23 seconds
- 2026-05-06 PASS 17 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 15 seconds
  - PASS 16 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 16 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 seconds
- 2026-05-04 PASS 18 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 seconds
