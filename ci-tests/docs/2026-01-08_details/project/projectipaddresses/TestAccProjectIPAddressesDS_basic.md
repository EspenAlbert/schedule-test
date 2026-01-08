# project/projectipaddresses/TestAccProjectIPAddressesDS_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 4.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 6 seconds
  - PASS 2 seconds
- 2025-12-11 PASS 3 seconds
- 2025-12-12 PASS 4 seconds
- 2025-12-13 PASS 3 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 seconds
- 2025-12-16 PASS 3 seconds
- 2025-12-17 PASS 3 seconds
- 2025-12-18 PASS 3 seconds
- 2025-12-19 PASS 3 seconds
- 2025-12-20 PASS 3 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 seconds
- 2025-12-23 PASS 3 seconds
- 2025-12-24 PASS 4 seconds
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 3 seconds
- 2025-12-27 PASS 4 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 seconds
- 2025-12-31 PASS 3 seconds
- 2026-01-01 PASS 3 seconds
- 2026-01-02 PASS 3 seconds
- 2026-01-03 PASS 5 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 seconds
- 2026-01-06 PASS 3 seconds
- 2026-01-07 PASS 3 seconds
- 2026-01-08
  - PASS 4 seconds
  - FAIL 4 seconds

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4680869Z === RUN   TestAccProjectIPAddressesDS_basic
2026-01-08T08:00:59.4681522Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-4345403207486763954
2026-01-08T08:00:59.4682582Z === CONT  TestAccProjectIPAddressesDS_basic
2026-01-08T08:00:59.4697272Z   
2026-01-08T08:00:59.4697790Z     data_source_test.go:16: Step 1/1 error: Error running post-apply non-refresh plan: exit status 1
2026-01-08T08:00:59.4698385Z         
2026-01-08T08:00:59.4698815Z         Error: error getting project's IP addresses
2026-01-08T08:00:59.4699161Z         
2026-01-08T08:00:59.4699646Z           with data.mongodbatlas_project_ip_addresses.test,
2026-01-08T08:00:59.4700480Z           on terraform_plugin_test.tf line 13, in data "mongodbatlas_project_ip_addresses" "test":
2026-01-08T08:00:59.4701234Z           13: 	data "mongodbatlas_project_ip_addresses" "test" {
2026-01-08T08:00:59.4701619Z         
2026-01-08T08:00:59.4702292Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63a3bd8c78dbeaf9b2a2/ipAddresses
2026-01-08T08:00:59.4703143Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T08:00:59.4703945Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T08:00:59.4704630Z --- FAIL: TestAccProjectIPAddressesDS_basic (4.99s)
```

  - PASS 3 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 4 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 5 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
