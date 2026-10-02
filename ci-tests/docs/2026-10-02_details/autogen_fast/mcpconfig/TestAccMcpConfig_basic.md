# autogen_fast/mcpconfig/TestAccMcpConfig_basic Test Details
# Found 27 TestRuns in dev, qa from 2026-09-12 to 2026-10-02 from master branch: 1 unique tests, PASS(x 24) FAIL(x 3)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-24 00:49](#error-2026-09-24t0049080000) | RESOURCE_NOT_FOUND /api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs | dev | 6.08s
[2026-09-26 00:46](#error-2026-09-26t0046510000) | RESOURCE_NOT_FOUND /api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs | dev | 2.03s
[2026-09-28 00:54](#error-2026-09-28t0054380000) | RESOURCE_NOT_FOUND /api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs | dev | 6.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12 PASS 18 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 19 seconds
- 2026-09-15 PASS 17 seconds
- 2026-09-16 PASS 18 seconds
- 2026-09-17 PASS 17 seconds
- 2026-09-18 PASS 18 seconds
- 2026-09-19 PASS 17 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 20 seconds
- 2026-09-22 PASS 16 seconds
- 2026-09-23
  - PASS 16 seconds
  - PASS 17 seconds
- 2026-09-24

### Error 2026-09-24T00:49:08+00:00
```
2026-09-24T00:49:08.2158934Z === RUN   TestAccMcpConfig_basic
2026-09-24T00:49:08.2159660Z === CONT  TestAccMcpConfig_basic
2026-09-24T00:49:08.2173337Z   
2026-09-24T00:49:08.2173923Z     resource_test.go:54: Step 2/7 error: Error running post-apply refresh plan: exit status 1
2026-09-24T00:49:08.2174549Z         
2026-09-24T00:49:08.2174925Z         Error: Error calling API in Read
2026-09-24T00:49:08.2175285Z         
2026-09-24T00:49:08.2175707Z           with data.mongodbatlas_mcp_configs.test,
2026-09-24T00:49:08.2176551Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_mcp_configs" "test":
2026-09-24T00:49:08.2177399Z           25: 			data "mongodbatlas_mcp_configs" "test" {
2026-09-24T00:49:08.2177791Z         
2026-09-24T00:49:08.2178418Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs
2026-09-24T00:49:08.2179471Z         GET: HTTP 404 Not Found (Error code: "RESOURCE_NOT_FOUND") Detail: Cannot
2026-09-24T00:49:08.2180443Z         find resource mdb_sa_id_6ab4725efb1a9f9d8a669014. Reason: Not Found. Params:
2026-09-24T00:49:08.2181123Z         [mdb_sa_id_6ab4725efb1a9f9d8a669014], BadRequestDetail: 
2026-09-24T00:49:08.2181873Z --- FAIL: TestAccMcpConfig_basic (6.79s)
```

- 2026-09-25 PASS 15 seconds
- 2026-09-26

### Error 2026-09-26T00:46:51+00:00
```
2026-09-26T00:46:51.7954585Z === RUN   TestAccMcpConfig_basic
2026-09-26T00:46:51.7955065Z === CONT  TestAccMcpConfig_basic
2026-09-26T00:46:51.7962089Z   
2026-09-26T00:46:51.7962365Z     resource_test.go:54: Step 1/7 error: Error running apply: exit status 1
2026-09-26T00:46:51.7962697Z         
2026-09-26T00:46:51.7962911Z         Error: Error calling API in Read
2026-09-26T00:46:51.7963123Z         
2026-09-26T00:46:51.7963564Z           with data.mongodbatlas_mcp_configs.test,
2026-09-26T00:46:51.7964206Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_mcp_configs" "test":
2026-09-26T00:46:51.7964793Z           25: 			data "mongodbatlas_mcp_configs" "test" {
2026-09-26T00:46:51.7965124Z         
2026-09-26T00:46:51.7965474Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs
2026-09-26T00:46:51.7966474Z         GET: HTTP 404 Not Found (Error code: "RESOURCE_NOT_FOUND") Detail: Cannot
2026-09-26T00:46:51.7967132Z         find resource mdb_sa_id_6ab714e3c118e7352e2f0dc3. Reason: Not Found. Params:
2026-09-26T00:46:51.7967717Z         [mdb_sa_id_6ab714e3c118e7352e2f0dc3], BadRequestDetail: 
2026-09-26T00:46:51.7968112Z --- FAIL: TestAccMcpConfig_basic (2.31s)
```

- 2026-09-27: MISSING
- 2026-09-28

### Error 2026-09-28T00:54:38+00:00
```
2026-09-28T00:54:38.4131254Z === RUN   TestAccMcpConfig_basic
2026-09-28T00:54:38.4131823Z === CONT  TestAccMcpConfig_basic
2026-09-28T00:54:38.4141964Z    test_working_directory=/tmp/plugintest3316416893 test_step_number=2 test_name=TestAccMcpConfig_basic
2026-09-28T00:54:38.4142668Z     resource_test.go:54: Step 2/7 error: Error running post-apply non-refresh plan: exit status 1
2026-09-28T00:54:38.4143091Z         
2026-09-28T00:54:38.4143387Z         Error: Error calling API in Read
2026-09-28T00:54:38.4143880Z         
2026-09-28T00:54:38.4144220Z           with data.mongodbatlas_mcp_configs.test,
2026-09-28T00:54:38.4144797Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_mcp_configs" "test":
2026-09-28T00:54:38.4145442Z           25: 			data "mongodbatlas_mcp_configs" "test" {
2026-09-28T00:54:38.4145752Z         
2026-09-28T00:54:38.4146257Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/mcpConfigs
2026-09-28T00:54:38.4146888Z         GET: HTTP 404 Not Found (Error code: "RESOURCE_NOT_FOUND") Detail: Cannot
2026-09-28T00:54:38.4147485Z         find resource mdb_sa_id_6ab9b9a6dbeb263a7e7a1b6f. Reason: Not Found. Params:
2026-09-28T00:54:38.4148016Z         [mdb_sa_id_6ab9b9a6dbeb263a7e7a1b6f], BadRequestDetail: 
2026-09-28T00:54:38.4148379Z --- FAIL: TestAccMcpConfig_basic (6.39s)
```

- 2026-09-29
  - PASS 15 seconds
  - PASS 16 seconds
- 2026-09-30 PASS 17 seconds
- 2026-10-01 PASS 15 seconds
- 2026-10-02 PASS 16 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 16 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 15 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 15 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 20 seconds
  - PASS 19 seconds
  - PASS 22 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
