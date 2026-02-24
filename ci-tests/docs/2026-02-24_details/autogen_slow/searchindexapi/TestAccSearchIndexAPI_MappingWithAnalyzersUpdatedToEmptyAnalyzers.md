# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 8)
Success rate: 75.76%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev | timeout | 3600.09s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev | timeout | 3600.06s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev |  | 2.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 17 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 14 minutes
- 2026-01-30 PASS 10 minutes
- 2026-01-31

### Error 2026-01-31T05:36:29+00:00
```
2026-01-31T05:36:29.4650806Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-01-31T05:36:29.4651467Z     resource_test.go:70: Creating execution cluster: test-acc-tf-c-5809340976425352473
2026-01-31T05:36:29.4651972Z 2026/01/31 02:36:35 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:36:29.4652366Z 2026/01/31 02:39:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4652732Z 2026/01/31 02:40:36 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4653095Z 2026/01/31 02:40:46 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4653445Z 2026/01/31 02:41:47 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4653794Z 2026/01/31 02:41:57 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4654146Z 2026/01/31 02:42:57 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4654492Z 2026/01/31 02:43:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4654845Z 2026/01/31 02:44:08 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4655198Z 2026/01/31 02:44:18 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4655545Z 2026/01/31 02:45:19 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4655896Z 2026/01/31 02:45:29 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4656245Z 2026/01/31 02:46:29 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4656591Z 2026/01/31 02:46:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4656941Z 2026/01/31 02:47:40 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4657291Z 2026/01/31 02:47:50 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4657637Z 2026/01/31 02:48:51 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4657982Z 2026/01/31 02:49:01 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4658444Z 2026/01/31 02:50:01 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4658793Z 2026/01/31 02:50:12 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4659144Z 2026/01/31 02:51:12 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4659492Z 2026/01/31 02:51:22 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4659838Z 2026/01/31 02:52:23 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4660183Z 2026/01/31 02:52:33 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4660533Z 2026/01/31 02:53:33 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4660878Z 2026/01/31 02:53:44 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4661348Z 2026/01/31 02:54:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4661699Z 2026/01/31 02:54:54 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4662046Z 2026/01/31 02:55:55 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4662391Z 2026/01/31 02:56:05 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4662742Z 2026/01/31 02:57:05 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4663088Z 2026/01/31 02:57:16 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4663435Z 2026/01/31 02:58:16 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4663785Z 2026/01/31 02:58:26 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4664135Z 2026/01/31 02:59:27 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4664483Z 2026/01/31 02:59:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4664833Z 2026/01/31 03:00:37 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4665178Z 2026/01/31 03:00:48 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4665528Z 2026/01/31 03:01:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4665919Z 2026/01/31 03:01:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4666263Z 2026/01/31 03:02:59 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4666611Z 2026/01/31 03:03:09 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4666965Z 2026/01/31 03:04:09 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4667332Z 2026/01/31 03:04:20 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4667860Z 2026/01/31 03:05:20 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4668336Z 2026/01/31 03:05:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4668689Z 2026/01/31 03:06:31 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4669038Z 2026/01/31 03:06:41 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4669392Z 2026/01/31 03:07:41 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4669738Z 2026/01/31 03:07:52 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4670094Z 2026/01/31 03:08:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4670445Z 2026/01/31 03:09:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4670791Z 2026/01/31 03:10:03 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4671145Z 2026/01/31 03:10:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4671502Z 2026/01/31 03:11:13 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4671849Z 2026/01/31 03:11:24 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4672199Z 2026/01/31 03:12:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4672549Z 2026/01/31 03:12:34 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4672893Z 2026/01/31 03:13:35 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4673239Z 2026/01/31 03:13:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4673804Z 2026/01/31 03:14:45 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4674163Z 2026/01/31 03:14:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4674668Z 2026/01/31 03:15:56 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4675025Z 2026/01/31 03:16:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4675554Z 2026/01/31 03:17:07 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4675911Z 2026/01/31 03:17:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4676424Z 2026/01/31 03:18:17 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4676774Z 2026/01/31 03:18:28 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4677125Z 2026/01/31 03:19:28 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4677475Z 2026/01/31 03:19:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4677820Z 2026/01/31 03:20:39 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4678384Z 2026/01/31 03:20:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4678743Z 2026/01/31 03:21:50 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4679232Z 2026/01/31 03:22:00 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4679737Z 2026/01/31 03:23:00 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4680262Z 2026/01/31 03:23:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4680611Z 2026/01/31 03:24:11 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4681109Z 2026/01/31 03:24:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4681458Z 2026/01/31 03:25:21 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4682045Z 2026/01/31 03:25:32 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4682594Z 2026/01/31 03:26:32 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4683014Z 2026/01/31 03:26:42 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4683452Z 2026/01/31 03:27:43 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4683850Z 2026/01/31 03:27:53 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4684280Z 2026/01/31 03:28:54 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4684691Z 2026/01/31 03:29:04 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4685119Z 2026/01/31 03:30:04 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4685538Z 2026/01/31 03:30:14 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4685960Z 2026/01/31 03:31:15 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4686376Z 2026/01/31 03:31:25 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4686814Z 2026/01/31 03:32:26 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4687224Z 2026/01/31 03:32:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4687839Z 2026/01/31 03:33:36 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4688480Z 2026/01/31 03:33:46 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4688917Z 2026/01/31 03:34:47 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4689354Z 2026/01/31 03:34:57 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4689774Z 2026/01/31 03:35:58 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4690208Z 2026/01/31 03:36:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4690646Z 2026/01/31 03:36:35 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T05:36:29.4691233Z 2026/01/31 03:36:35 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T05:36:29.4691659Z     resource_test.go:70: 
2026-01-31T05:36:29.4692849Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T05:36:29.4694990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T05:36:29.4697346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:70
2026-01-31T05:36:29.4698437Z         	Error:      	Received unexpected error:
2026-01-31T05:36:29.4699664Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4700611Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-01-31T05:36:29.4702120Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5809340976425352473, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4703179Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (3600.88s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T05:40:36+00:00
```
2026-02-02T05:40:36.1318272Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-02T05:40:36.1318952Z     resource_test.go:70: Creating execution cluster: test-acc-tf-c-7025758180986286085
2026-02-02T05:40:36.1319456Z 2026/02/02 02:40:42 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T05:40:36.1319856Z 2026/02/02 02:43:42 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1320219Z 2026/02/02 02:44:42 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1320578Z 2026/02/02 02:44:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1320933Z 2026/02/02 02:45:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1321288Z 2026/02/02 02:46:03 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1321638Z 2026/02/02 02:47:03 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1321985Z 2026/02/02 02:47:13 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1322332Z 2026/02/02 02:48:13 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1322681Z 2026/02/02 02:48:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1323031Z 2026/02/02 02:49:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1323374Z 2026/02/02 02:49:34 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1323720Z 2026/02/02 02:50:34 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1324063Z 2026/02/02 02:50:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1324408Z 2026/02/02 02:51:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1324758Z 2026/02/02 02:51:54 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1325108Z 2026/02/02 02:52:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1325455Z 2026/02/02 02:53:05 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1325800Z 2026/02/02 02:54:05 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1326147Z 2026/02/02 02:54:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1326494Z 2026/02/02 02:55:15 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1326846Z 2026/02/02 02:55:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1327190Z 2026/02/02 02:56:25 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1327535Z 2026/02/02 02:56:36 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1327883Z 2026/02/02 02:57:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1328408Z 2026/02/02 02:57:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1328755Z 2026/02/02 02:58:46 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1329105Z 2026/02/02 02:58:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1329760Z 2026/02/02 02:59:56 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1330124Z 2026/02/02 03:00:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1330618Z 2026/02/02 03:01:07 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1330969Z 2026/02/02 03:01:17 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1331447Z 2026/02/02 03:02:17 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1331819Z 2026/02/02 03:02:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1332323Z 2026/02/02 03:03:27 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1332682Z 2026/02/02 03:03:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1333174Z 2026/02/02 03:04:37 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1333574Z 2026/02/02 03:04:48 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1334006Z 2026/02/02 03:05:48 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1334407Z 2026/02/02 03:05:58 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1334831Z 2026/02/02 03:06:58 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1335221Z 2026/02/02 03:07:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1335659Z 2026/02/02 03:08:08 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1336061Z 2026/02/02 03:08:18 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1336616Z 2026/02/02 03:09:19 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1337118Z 2026/02/02 03:09:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1337499Z 2026/02/02 03:10:29 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1337966Z 2026/02/02 03:10:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1338630Z 2026/02/02 03:11:39 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1339009Z 2026/02/02 03:11:49 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1339517Z 2026/02/02 03:12:49 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1339955Z 2026/02/02 03:13:00 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1340374Z 2026/02/02 03:14:00 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1340810Z 2026/02/02 03:14:10 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1341217Z 2026/02/02 03:15:10 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1341661Z 2026/02/02 03:15:20 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1342043Z 2026/02/02 03:16:20 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1342505Z 2026/02/02 03:16:30 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1342862Z 2026/02/02 03:17:31 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1343314Z 2026/02/02 03:17:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1343702Z 2026/02/02 03:18:41 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1344163Z 2026/02/02 03:18:51 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1344518Z 2026/02/02 03:19:51 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1344984Z 2026/02/02 03:20:01 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1345345Z 2026/02/02 03:21:02 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1345820Z 2026/02/02 03:21:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1346180Z 2026/02/02 03:22:12 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1346651Z 2026/02/02 03:22:22 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1347010Z 2026/02/02 03:23:22 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1347478Z 2026/02/02 03:23:32 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1347845Z 2026/02/02 03:24:32 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1348400Z 2026/02/02 03:24:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1348762Z 2026/02/02 03:25:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1349234Z 2026/02/02 03:25:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1349585Z 2026/02/02 03:26:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1350563Z 2026/02/02 03:27:03 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1351201Z 2026/02/02 03:28:03 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1351866Z 2026/02/02 03:28:13 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1352550Z 2026/02/02 03:29:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1353229Z 2026/02/02 03:29:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1353723Z 2026/02/02 03:30:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1354089Z 2026/02/02 03:30:34 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1354441Z 2026/02/02 03:31:34 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1354790Z 2026/02/02 03:31:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1355148Z 2026/02/02 03:32:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1355495Z 2026/02/02 03:32:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1355842Z 2026/02/02 03:33:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1356200Z 2026/02/02 03:34:05 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1356549Z 2026/02/02 03:35:05 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1356902Z 2026/02/02 03:35:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1357268Z 2026/02/02 03:36:15 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1357788Z 2026/02/02 03:36:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1358536Z 2026/02/02 03:37:26 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1358951Z 2026/02/02 03:37:36 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1359404Z 2026/02/02 03:38:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1359761Z 2026/02/02 03:38:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1360229Z 2026/02/02 03:39:46 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1360623Z 2026/02/02 03:39:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1361086Z 2026/02/02 03:40:42 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T05:40:36.1361653Z 2026/02/02 03:40:42 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T05:40:36.1362090Z     resource_test.go:70: 
2026-02-02T05:40:36.1363179Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T05:40:36.1365488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T05:40:36.1367882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:70
2026-02-02T05:40:36.1369010Z         	Error:      	Received unexpected error:
2026-02-02T05:40:36.1370220Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1371038Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-02T05:40:36.1372343Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7025758180986286085, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1373255Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (3600.63s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4451125Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-03T00:42:45.4452263Z     resource_test.go:70: Creating execution cluster: test-acc-tf-c-8095820699836601377
2026-02-03T00:42:45.4453038Z     resource_test.go:70: 
2026-02-03T00:42:45.4454621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4457874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4461475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:70
2026-02-03T00:42:45.4462884Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4467437Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4470087Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-03T00:42:45.4474265Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8095820699836601377, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4476939Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.40s)
```

- 2026-02-04 PASS 16 minutes
- 2026-02-05 PASS 11 minutes
- 2026-02-06 PASS 29 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 12 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 16 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 17 minutes
- 2026-02-19 PASS 14 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 15 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3750433Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3758012Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3773421Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-24T01:07:11.3774026Z     resource_test.go:73: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:07:11.3774405Z         
2026-02-24T01:07:11.3774693Z         Error: Error calling API in Create
2026-02-24T01:07:11.3774988Z         
2026-02-24T01:07:11.3775325Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3776273Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3776942Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3777278Z         
2026-02-24T01:07:11.3778191Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3779070Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3779735Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3780292Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3780798Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (2.48s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 968.02s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 901.01s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1050.01s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 906.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1944529Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1953968Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1997377Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-15T01:24:54.1998871Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9ff) still exists
2026-02-15T01:24:54.1999879Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (968.19s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 15 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9173929Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9181054Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9228461Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T16:03:21.9229601Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f397) still exists
2026-02-17T16:03:21.9230573Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (901.08s)
```

  - FAIL 17 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3899134Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3912448Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3975933Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-17T20:22:24.3978078Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18cb) still exists
2026-02-17T20:22:24.3980182Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (1050.12s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8705616Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8714599Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8755889Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-02-22T01:16:57.8757084Z     resource_test.go:73: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b748) still exists
2026-02-22T01:16:57.8758133Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (906.65s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
