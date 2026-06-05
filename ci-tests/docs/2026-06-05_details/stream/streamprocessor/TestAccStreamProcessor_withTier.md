# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.02s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.03s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 45 seconds
  - PASS 11 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09
  - PASS 10 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1254015Z === RUN   TestAccStreamProcessor_withTier
2026-05-09T01:47:38.1254588Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-7994231304148010633
2026-05-09T01:47:38.1255078Z     resource_test.go:58: 
2026-05-09T01:47:38.1255983Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1257787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1259588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1261384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1263396Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-05-09T01:47:38.1264614Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1265139Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1267070Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1268105Z         	Test:       	TestAccStreamProcessor_withTier
2026-05-09T01:47:38.1269981Z         	Messages:   	Project creation failed: test-acc-tf-p-7994231304148010633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1271173Z --- FAIL: TestAccStreamProcessor_withTier (72.20s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 10 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.1001343Z === RUN   TestAccStreamProcessor_withTier
2026-05-16T01:46:08.1001912Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-7192659970940136653
2026-05-16T01:46:08.1002402Z     resource_test.go:58: 
2026-05-16T01:46:08.1003442Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.1005257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.1007080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.1008905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.1010814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-05-16T01:46:08.1012026Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:46:08.1012547Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.1014735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1015775Z         	Test:       	TestAccStreamProcessor_withTier
2026-05-16T01:46:08.1017897Z         	Messages:   	Project creation failed: test-acc-tf-p-7192659970940136653, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1019104Z --- FAIL: TestAccStreamProcessor_withTier (88.26s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1678783Z === RUN   TestAccStreamProcessor_withTier
2026-05-19T02:05:39.1679804Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-8623685993929702613
2026-05-19T02:05:39.1680696Z     resource_test.go:58: 
2026-05-19T02:05:39.1682221Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1685804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1689142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1692453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-19T02:05:39.1696266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-05-19T02:05:39.1698527Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T02:05:39.1699463Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1703330Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1705209Z         	Test:       	TestAccStreamProcessor_withTier
2026-05-19T02:05:39.1708355Z         	Messages:   	Project creation failed: test-acc-tf-p-8623685993929702613, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1710412Z --- FAIL: TestAccStreamProcessor_withTier (62.61s)
```

- 2026-05-20
  - PASS 14 seconds
  - PASS 11 seconds
- 2026-05-21 PASS 14 seconds
- 2026-05-22 PASS 11 seconds
- 2026-05-23 PASS 13 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8790105Z === RUN   TestAccStreamProcessor_withTier
2026-05-26T03:14:06.8790679Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-3536620598652698996
2026-05-26T03:14:06.8791183Z     resource_test.go:58: 
2026-05-26T03:14:06.8792113Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8793940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8795773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8797870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-26T03:14:06.8799792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-05-26T03:14:06.8801006Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T03:14:06.8801538Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8803496Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8804540Z         	Test:       	TestAccStreamProcessor_withTier
2026-05-26T03:14:06.8806317Z         	Messages:   	Project creation failed: test-acc-tf-p-3536620598652698996, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8807868Z --- FAIL: TestAccStreamProcessor_withTier (66.53s)
```

- 2026-05-27 PASS 15 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5283719Z === RUN   TestAccStreamProcessor_withTier
2026-05-28T02:40:17.5284287Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-6060012930518545372
2026-05-28T02:40:17.5284777Z     resource_test.go:58: 
2026-05-28T02:40:17.5285688Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5287720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5289528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5291321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5293196Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-05-28T02:40:17.5294569Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:40:17.5295091Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5297023Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5298284Z         	Test:       	TestAccStreamProcessor_withTier
2026-05-28T02:40:17.5300031Z         	Messages:   	Project creation failed: test-acc-tf-p-6060012930518545372, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5301318Z --- FAIL: TestAccStreamProcessor_withTier (62.82s)
```

- 2026-05-29 PASS 15 seconds
- 2026-05-30 PASS 56 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5636490Z === RUN   TestAccStreamProcessor_withTier
2026-06-02T01:54:34.5637085Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-3196324802232877775
2026-06-02T01:54:34.5637589Z     resource_test.go:58: 
2026-06-02T01:54:34.5638476Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5640235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5641907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5644745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5647063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-06-02T01:54:34.5648231Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5648757Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5650545Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5651698Z         	Test:       	TestAccStreamProcessor_withTier
2026-06-02T01:54:34.5653324Z         	Messages:   	Project creation failed: test-acc-tf-p-3196324802232877775, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5654450Z --- FAIL: TestAccStreamProcessor_withTier (89.93s)
```

- 2026-06-03 PASS 11 seconds
- 2026-06-04 PASS 16 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 12 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25 PASS 15 seconds
- 2026-05-26 PASS 14 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
