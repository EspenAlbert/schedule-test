# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 01:08](#error-2026-05-07t0108000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-12 01:04](#error-2026-05-12t0104480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-05-16 01:20](#error-2026-05-16t0120140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.03s
[2026-05-30 01:29](#error-2026-05-30t0129140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T01:08:00+00:00
```
2026-05-07T01:08:00.8894400Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-07T01:08:00.8895381Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-1544521759261051959
2026-05-07T01:08:00.8896145Z     resource_test.go:25: 
2026-05-07T01:08:00.8897506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-07T01:08:00.8900297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-07T01:08:00.8903218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-07T01:08:00.8906572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-07T01:08:00.8910103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-07T01:08:00.8912302Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-07T01:08:00.8913443Z         	Error:      	Received unexpected error:
2026-05-07T01:08:00.8916831Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T01:08:00.8918680Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-07T01:08:00.8921556Z         	Messages:   	Project creation failed: test-acc-tf-p-1544521759261051959, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T01:08:00.8923107Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (62.77s)
```

  - PASS 3 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1231487Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-09T01:23:39.1232510Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-3797591633840161499
2026-05-09T01:23:39.1233046Z     resource_test.go:25: 
2026-05-09T01:23:39.1234040Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1235947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1238101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1240124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-09T01:23:39.1242231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-09T01:23:39.1243507Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:23:39.1244053Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1246098Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1249573Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-09T01:23:39.1253016Z         	Messages:   	Project creation failed: test-acc-tf-p-3797591633840161499, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1255574Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (63.46s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12

### Error 2026-05-12T01:04:48+00:00
```
2026-05-12T01:04:48.9095046Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-12T01:04:48.9096488Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-8410456223598182608
2026-05-12T01:04:48.9099900Z     resource_test.go:25: 
2026-05-12T01:04:48.9102269Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T01:04:48.9106482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T01:04:48.9110551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-12T01:04:48.9114530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-12T01:04:48.9118345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-12T01:04:48.9120616Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-12T01:04:48.9121749Z         	Error:      	Received unexpected error:
2026-05-12T01:04:48.9125416Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:04:48.9127370Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-12T01:04:48.9130704Z         	Messages:   	Project creation failed: test-acc-tf-p-8410456223598182608, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:04:48.9133100Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (63.61s)
```

- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 6 minutes
- 2026-05-16

### Error 2026-05-16T01:20:14+00:00
```
2026-05-16T01:20:14.0024202Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-16T01:20:14.0025512Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-9089979810543581144
2026-05-16T01:20:14.0026547Z     resource_test.go:25: 
2026-05-16T01:20:14.0028431Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:14.0032612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:14.0036312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:14.0040490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-16T01:20:14.0044482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-16T01:20:14.0046898Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:20:14.0047887Z         	Error:      	Received unexpected error:
2026-05-16T01:20:14.0052054Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0054100Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-16T01:20:14.0057979Z         	Messages:   	Project creation failed: test-acc-tf-p-9089979810543581144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0060566Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (71.30s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 4 minutes
- 2026-05-19 PASS 3 minutes
- 2026-05-20 PASS 6 minutes
- 2026-05-21 PASS 3 minutes
- 2026-05-22 PASS 3 minutes
- 2026-05-23 PASS 3 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 3 minutes
- 2026-05-29 PASS 5 minutes
- 2026-05-30

### Error 2026-05-30T01:29:14+00:00
```
2026-05-30T01:29:14.4337894Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-30T01:29:14.4338910Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6588925488517347729
2026-05-30T01:29:14.4339493Z     resource_test.go:25: 
2026-05-30T01:29:14.4340570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:29:14.4342936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:29:14.4345036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:29:14.4347206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-30T01:29:14.4349395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-30T01:29:14.4350745Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:29:14.4351748Z         	Error:      	Received unexpected error:
2026-05-30T01:29:14.4354050Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4357803Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-30T01:29:14.4360354Z         	Messages:   	Project creation failed: test-acc-tf-p-6588925488517347729, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4361845Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (63.46s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02 PASS 8 minutes
- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 4 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
