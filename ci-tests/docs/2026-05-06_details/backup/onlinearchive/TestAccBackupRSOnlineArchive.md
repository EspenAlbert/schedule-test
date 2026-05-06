# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 9)
Success rate: 73.53%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:19](#error-2026-04-09t0119070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-04-16 01:05](#error-2026-04-16t0105000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-04-22 02:25](#error-2026-04-22t0225300000) |  | dev |  | 2556.01s
[2026-04-25 01:29](#error-2026-04-25t0129140000) |  | dev |  | 1416.02s
[2026-04-27 01:40](#error-2026-04-27t0140020000) |  | dev |  | 1531.09s
[2026-04-28 01:44](#error-2026-04-28t0144150000) |  | dev |  | 1763.09s
[2026-04-29 01:47](#error-2026-04-29t0147160000) |  | dev |  | 1753.03s
[2026-04-30 01:34](#error-2026-04-30t0134120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-05-06 02:41](#error-2026-05-06t0241390000) |  | dev |  | 4913.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 23 minutes
- 2026-04-09

### Error 2026-04-09T01:19:07+00:00
```
2026-04-09T01:19:07.1157892Z === RUN   TestAccBackupRSOnlineArchive
2026-04-09T01:19:07.1158991Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-2344854222494544218
2026-04-09T01:19:07.1159499Z     resource_test.go:28: 
2026-04-09T01:19:07.1160406Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:19:07.1162209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:19:07.1163989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:19:07.1165691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-09T01:19:07.1167688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-04-09T01:19:07.1169101Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:19:07.1169611Z         	Error:      	Received unexpected error:
2026-04-09T01:19:07.1171558Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1172565Z         	Test:       	TestAccBackupRSOnlineArchive
2026-04-09T01:19:07.1174301Z         	Messages:   	Project creation failed: test-acc-tf-p-2344854222494544218, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1175464Z --- FAIL: TestAccBackupRSOnlineArchive (62.25s)
```

- 2026-04-10 PASS 43 minutes
- 2026-04-11 PASS 17 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 29 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8265403Z === RUN   TestAccBackupRSOnlineArchive
2026-04-16T01:05:00.8265964Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-4022774602294573441
2026-04-16T01:05:00.8266548Z     resource_test.go:28: 
2026-04-16T01:05:00.8267438Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T01:05:00.8269181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T01:05:00.8271082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T01:05:00.8272735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-16T01:05:00.8274486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-04-16T01:05:00.8275652Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T01:05:00.8276173Z         	Error:      	Received unexpected error:
2026-04-16T01:05:00.8278184Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8279180Z         	Test:       	TestAccBackupRSOnlineArchive
2026-04-16T01:05:00.8280862Z         	Messages:   	Project creation failed: test-acc-tf-p-4022774602294573441, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8281967Z --- FAIL: TestAccBackupRSOnlineArchive (70.60s)
```

- 2026-04-17 PASS 25 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 minutes
- 2026-04-21 PASS 30 minutes
- 2026-04-22

### Error 2026-04-22T02:25:30+00:00
```
2026-04-22T02:25:30.0302848Z === RUN   TestAccBackupRSOnlineArchive
2026-04-22T02:25:30.0309043Z === CONT  TestAccBackupRSOnlineArchive
2026-04-22T02:25:30.0317328Z === NAME  TestAccBackupRSOnlineArchive
2026-04-22T02:25:30.0318832Z     pre_check.go:46: Time before creating cluster: 2026-04-22T01:40:53.137066953Z, ProjectID: 69e8270f2b44c110f3bc286f, Cluster name: test-acc-tf-c-1589421128129951508
2026-04-22T02:25:30.0335931Z === NAME  TestAccBackupRSOnlineArchive
2026-04-22T02:25:30.0336696Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-22T02:25:30.0339163Z   diagnostic_summary=
2026-04-22T02:25:30.0342457Z    diagnostic_detail="" diagnostic_severity=ERROR tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_req_id=a79c32a3-404d-236e-5b82-80bbd80ba973
2026-04-22T02:25:30.0351400Z --- FAIL: TestAccBackupRSOnlineArchive (2556.05s)
```

- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25

### Error 2026-04-25T01:29:14+00:00
```
2026-04-25T01:29:14.7039601Z === RUN   TestAccBackupRSOnlineArchive
2026-04-25T01:29:14.7040911Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-6993990031000515439
2026-04-25T01:29:14.7047104Z === CONT  TestAccBackupRSOnlineArchive
2026-04-25T01:29:14.7053564Z === NAME  TestAccBackupRSOnlineArchive
2026-04-25T01:29:14.7054928Z     pre_check.go:46: Time before creating cluster: 2026-04-25T01:03:35.213728281Z, ProjectID: 69ec12da1e137e366f02d49a, Cluster name: test-acc-tf-c-8821633475191102339
2026-04-25T01:29:14.7092373Z === NAME  TestAccBackupRSOnlineArchive
2026-04-25T01:29:14.7093656Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:29:14.7100907Z --- FAIL: TestAccBackupRSOnlineArchive (1416.24s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:40:02+00:00
```
2026-04-27T01:40:02.9923267Z === RUN   TestAccBackupRSOnlineArchive
2026-04-27T01:40:02.9930172Z === CONT  TestAccBackupRSOnlineArchive
2026-04-27T01:40:02.9939965Z === NAME  TestAccBackupRSOnlineArchive
2026-04-27T01:40:02.9941121Z     pre_check.go:46: Time before creating cluster: 2026-04-27T01:12:38.971032206Z, ProjectID: 69eeb7eb3f007945e3a4279b, Cluster name: test-acc-tf-c-4860187296959696385
2026-04-27T01:40:02.9960606Z === NAME  TestAccBackupRSOnlineArchive
2026-04-27T01:40:02.9961497Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:40:02.9971356Z --- FAIL: TestAccBackupRSOnlineArchive (1531.85s)
```

- 2026-04-28

### Error 2026-04-28T01:44:15+00:00
```
2026-04-28T01:44:15.5197445Z === RUN   TestAccBackupRSOnlineArchive
2026-04-28T01:44:15.5198459Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7156255279766373125
2026-04-28T01:44:15.5203231Z === CONT  TestAccBackupRSOnlineArchive
2026-04-28T01:44:15.5211971Z === NAME  TestAccBackupRSOnlineArchive
2026-04-28T01:44:15.5213210Z     pre_check.go:46: Time before creating cluster: 2026-04-28T01:11:28.543476964Z, ProjectID: 69f0092e3c93ff81902e46e0, Cluster name: test-acc-tf-c-6908302962924804492
2026-04-28T01:44:15.5220889Z === NAME  TestAccBackupRSOnlineArchive
2026-04-28T01:44:15.5221636Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:44:15.5247066Z --- FAIL: TestAccBackupRSOnlineArchive (1763.91s)
```

- 2026-04-29

### Error 2026-04-29T01:47:16+00:00
```
2026-04-29T01:47:16.1616064Z === RUN   TestAccBackupRSOnlineArchive
2026-04-29T01:47:16.1625244Z === CONT  TestAccBackupRSOnlineArchive
2026-04-29T01:47:16.1631560Z === NAME  TestAccBackupRSOnlineArchive
2026-04-29T01:47:16.1633237Z     pre_check.go:46: Time before creating cluster: 2026-04-29T01:14:41.920601923Z, ProjectID: 69f15b762bb4e6756060b60d, Cluster name: test-acc-tf-c-8036919531977846815
2026-04-29T01:47:16.1692380Z === NAME  TestAccBackupRSOnlineArchive
2026-04-29T01:47:16.1693297Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-29T01:47:16.1701120Z --- FAIL: TestAccBackupRSOnlineArchive (1753.28s)
```

- 2026-04-30

### Error 2026-04-30T01:34:12+00:00
```
2026-04-30T01:34:12.2260551Z === RUN   TestAccBackupRSOnlineArchive
2026-04-30T01:34:12.2262609Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-1057901615397091080
2026-04-30T01:34:12.2263897Z     resource_test.go:28: 
2026-04-30T01:34:12.2266477Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:34:12.2275122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:34:12.2279274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:34:12.2283151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:34:12.2286934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-04-30T01:34:12.2289237Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:34:12.2290213Z         	Error:      	Received unexpected error:
2026-04-30T01:34:12.2294291Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:34:12.2297009Z         	Test:       	TestAccBackupRSOnlineArchive
2026-04-30T01:34:12.2300493Z         	Messages:   	Project creation failed: test-acc-tf-p-1057901615397091080, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:34:12.2304098Z --- FAIL: TestAccBackupRSOnlineArchive (62.08s)
```

- 2026-05-01 PASS 25 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 minutes
- 2026-05-05 PASS 47 minutes
- 2026-05-06

### Error 2026-05-06T02:41:39+00:00
```
2026-05-06T02:41:39.1388576Z === RUN   TestAccBackupRSOnlineArchive
2026-05-06T02:41:39.1395949Z === CONT  TestAccBackupRSOnlineArchive
2026-05-06T02:41:39.1404914Z === NAME  TestAccBackupRSOnlineArchive
2026-05-06T02:41:39.1405778Z     pre_check.go:46: Time before creating cluster: 2026-05-06T01:15:43.000315905Z, ProjectID: 69fa9622927d92ac31b41780, Cluster name: test-acc-tf-c-8379643551548715192
2026-05-06T02:41:39.1434674Z === NAME  TestAccBackupRSOnlineArchive
2026-05-06T02:41:39.1435410Z     resource_test.go:35: Step 1/7 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-05-06T02:41:39.1437071Z --- FAIL: TestAccBackupRSOnlineArchive (4913.28s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 18 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
